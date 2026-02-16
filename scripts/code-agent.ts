import ollama from 'ollama';
import fs from 'fs';
import path from 'path';

async function codeAgent() {
  const filePath = process.argv[2];
  const instruction = process.argv.slice(3).join(' ');

  if (!filePath || !instruction) {
    console.log('Usage: npx ts-node scripts/code-agent.ts <file-path> <instruction>');
    return;
  }

  const absolutePath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    return;
  }

  const fileContent = fs.readFileSync(absolutePath, 'utf-8');

  console.log(`🤖 Agent analyzing: ${filePath}...`);

  try {
    const response = await ollama.chat({
      model: 'qwen3-coder-next:cloud',
      messages: [
        {
          role: 'system',
          content: 'You are an expert React/Next.js coding assistant. Provide only the updated code block. No explanations.'
        },
        {
          role: 'user',
          content: `Project File: ${filePath}\n\nExisting Code:\n\`\`\`tsx\n${fileContent}\n\`\`\`\n\nInstruction: ${instruction}`
        }
      ],
    });

    const updatedCode = response.message.content.replace(/```(tsx|typescript|javascript|ts|js)?\n/g, '').replace(/```/g, '');
    
    // Save a backup
    fs.writeFileSync(`${absolutePath}.bak`, fileContent);
    
    // Apply changes
    fs.writeFileSync(absolutePath, updatedCode);

    console.log(`✅ Changes applied to ${filePath}. Backup saved as .bak`);
  } catch (error) {
    console.error('❌ Agent Error:', error);
  }
}

codeAgent();
