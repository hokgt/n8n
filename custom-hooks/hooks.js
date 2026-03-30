/**
 * Wijayacorp n8n Custom Hooks Registry
 * 
 * Similar to Frappe's hooks.py — register lifecycle hooks here.
 * n8n loads this via N8N_EXTERNAL_HOOK_FILES env var.
 * 
 * Available hooks:
 *   workflow.activate       - Before workflow activation
 *   workflow.create         - After workflow creation
 *   workflow.delete         - Before workflow deletion
 *   workflow.execute        - Before workflow execution
 *   workflow.afterExecute   - After workflow execution
 *   n8n.ready               - When n8n is fully started
 *   credentials.create      - After credential creation
 *   credentials.delete      - Before credential deletion
 */

module.exports = {
  // Example: log all workflow executions
  'workflow.execute': [
    async function(hookData) {
      // hookData contains: { workflowData, executionMode, ... }
      console.log(`[wijayacorp-hook] Workflow executing: ${hookData.workflowData?.name || 'unknown'}`);
    }
  ],

  // Example: n8n ready hook  
  'n8n.ready': [
    async function() {
      console.log('[wijayacorp-hook] n8n is ready — custom hooks loaded');
    }
  ],
};
