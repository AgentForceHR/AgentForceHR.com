import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { useAgents } from '@/hooks/useAgents';
import { useToast } from '@/hooks/use-toast';
import { 
  Bot, 
  Plus, 
  Trash2, 
  Coins, 
  Zap, 
  Brain,
  FileText,
  Settings,
  CheckCircle,
  Info,
  ArrowRight
} from 'lucide-react';

interface AgentCreationFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const AgentCreationForm = ({ onSuccess, onCancel }: AgentCreationFormProps) => {
  const { createAgent } = useAgents();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    onboardingScript: '',
    configuration: {
      personality: 'professional',
      responseStyle: 'helpful',
      knowledgeBase: [
        { topic: '', content: '' }
      ],
      workflows: [
        { name: '', steps: [''], triggers: [''] }
      ]
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < 3) {
      // Move to next step instead of submitting
      setCurrentStep(currentStep + 1);
      return;
    }
    
    if (!formData.name || !formData.description || !formData.onboardingScript) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    try {
      setLoading(true);
      
      // Filter out empty knowledge base items
      const cleanedKnowledgeBase = formData.configuration.knowledgeBase.filter(
        item => item.topic.trim() && item.content.trim()
      );
      
      // Filter out empty workflows
      const cleanedWorkflows = formData.configuration.workflows.filter(
        workflow => workflow.name.trim() && workflow.steps.some(step => step.trim())
      ).map(workflow => ({
        ...workflow,
        steps: workflow.steps.filter(step => step.trim()),
        triggers: workflow.triggers.filter(trigger => trigger.trim())
      }));

      const agentData = {
        ...formData,
        configuration: {
          ...formData.configuration,
          knowledgeBase: cleanedKnowledgeBase,
          workflows: cleanedWorkflows
        }
      };

      await createAgent(agentData);
      
      toast({
        title: 'Success',
        description: 'AI agent created successfully! 10 HR tokens have been deducted from your balance.',
      });
      
      onSuccess?.();
      
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to create agent',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addKnowledgeItem = () => {
    setFormData(prev => ({
      ...prev,
      configuration: {
        ...prev.configuration,
        knowledgeBase: [...prev.configuration.knowledgeBase, { topic: '', content: '' }]
      }
    }));
  };

  const removeKnowledgeItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      configuration: {
        ...prev.configuration,
        knowledgeBase: prev.configuration.knowledgeBase.filter((_, i) => i !== index)
      }
    }));
  };

  const updateKnowledgeItem = (index: number, field: 'topic' | 'content', value: string) => {
    setFormData(prev => ({
      ...prev,
      configuration: {
        ...prev.configuration,
        knowledgeBase: prev.configuration.knowledgeBase.map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  const addWorkflowStep = (workflowIndex: number) => {
    setFormData(prev => ({
      ...prev,
      configuration: {
        ...prev.configuration,
        workflows: prev.configuration.workflows.map((workflow, i) => 
          i === workflowIndex 
            ? { ...workflow, steps: [...workflow.steps, ''] }
            : workflow
        )
      }
    }));
  };

  const updateWorkflowStep = (workflowIndex: number, stepIndex: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      configuration: {
        ...prev.configuration,
        workflows: prev.configuration.workflows.map((workflow, i) => 
          i === workflowIndex 
            ? { 
                ...workflow, 
                steps: workflow.steps.map((step, j) => j === stepIndex ? value : step)
              }
            : workflow
        )
      }
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Agent Name *</Label>
              <Input
                id="name"
                placeholder="e.g., HR Onboarding Assistant"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe what this agent will help employees with..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="script">Welcome Message *</Label>
              <Textarea
                id="script"
                placeholder="The initial message your agent will send to new employees..."
                value={formData.onboardingScript}
                onChange={(e) => setFormData(prev => ({ ...prev, onboardingScript: e.target.value }))}
                rows={4}
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Personality</Label>
                <Select 
                  value={formData.configuration.personality}
                  onValueChange={(value) => setFormData(prev => ({
                    ...prev,
                    configuration: { ...prev.configuration, personality: value }
                  }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Response Style</Label>
                <Select 
                  value={formData.configuration.responseStyle}
                  onValueChange={(value) => setFormData(prev => ({
                    ...prev,
                    configuration: { ...prev.configuration, responseStyle: value }
                  }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="helpful">Helpful</SelectItem>
                    <SelectItem value="detailed">Detailed</SelectItem>
                    <SelectItem value="concise">Concise</SelectItem>
                    <SelectItem value="empathetic">Empathetic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Knowledge Base</Label>
                <Button type="button" variant="outline" size="sm" onClick={addKnowledgeItem}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Topic
                </Button>
              </div>
              
              {formData.configuration.knowledgeBase.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Topic {index + 1}</Label>
                    {formData.configuration.knowledgeBase.length > 1 && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeKnowledgeItem(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <Input
                    placeholder="e.g., Benefits, Policies, IT Setup"
                    value={item.topic}
                    onChange={(e) => updateKnowledgeItem(index, 'topic', e.target.value)}
                  />
                  <Textarea
                    placeholder="Detailed information about this topic..."
                    value={item.content}
                    onChange={(e) => updateKnowledgeItem(index, 'content', e.target.value)}
                    rows={3}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Knowledge Base</Label>
                <Button type="button" variant="outline" size="sm" onClick={addKnowledgeItem}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Topic
                </Button>
              </div>
              
              {formData.configuration.knowledgeBase.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Topic {index + 1}</Label>
                    {formData.configuration.knowledgeBase.length > 1 && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeKnowledgeItem(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <Input
                    placeholder="e.g., Benefits, Policies, IT Setup"
                    value={item.topic}
                    onChange={(e) => updateKnowledgeItem(index, 'topic', e.target.value)}
                  />
                  <Textarea
                    placeholder="Detailed information about this topic..."
                    value={item.content}
                    onChange={(e) => updateKnowledgeItem(index, 'content', e.target.value)}
                    rows={3}
                  />
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium mb-2">Agent Preview</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Personality:</strong> {formData.configuration.personality}</p>
                <p><strong>Response Style:</strong> {formData.configuration.responseStyle}</p>
                <p><strong>Knowledge Topics:</strong> {formData.configuration.knowledgeBase.filter(item => item.topic).length}</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" />
            <CardTitle className="text-2xl">Create New AI Agent</CardTitle>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Coins className="w-3 h-3" />
            Cost: 100 HRT
          </Badge>
        </div>
        <CardDescription>
          Build a custom AI assistant to help with employee onboarding
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'
            }`}>
              {currentStep > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
            </div>
            <span className="text-sm font-medium">Basic Info</span>
          </div>
          <div className={`w-8 h-0.5 ${currentStep > 1 ? 'bg-primary' : 'bg-muted-foreground'}`} />
          <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 2 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'
            }`}>
              {currentStep > 2 ? <CheckCircle className="w-4 h-4" /> : '2'}
            </div>
            <span className="text-sm font-medium">Configuration</span>
          </div>
          <div className={`w-8 h-0.5 ${currentStep > 2 ? 'bg-primary' : 'bg-muted-foreground'}`} />
          <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 3 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'
            }`}>
              {currentStep > 3 ? <CheckCircle className="w-4 h-4" /> : '3'}
            </div>
            <span className="text-sm font-medium">Knowledge & Review</span>
          </div>
        </div>

        {/* Token Cost Alert */}
        <Alert className="border-accent/20 bg-accent/5">
          <Coins className="h-4 w-4 text-accent" />
          <AlertDescription>
            <strong>Token Cost:</strong> Creating this agent will cost 100 HR tokens. 
            Make sure you have sufficient balance in your wallet.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStepContent()}
          
          <Separator />
          
          <div className="flex justify-between">
            <div className="flex gap-2">
              {onCancel && (
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
              )}
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
            </div>
            
            <div className="flex gap-2">
              {currentStep < 3 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  disabled={loading || !formData.name || !formData.description || !formData.onboardingScript} 
                  className="flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Creating Agent...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Create Agent (100 HRT)
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};