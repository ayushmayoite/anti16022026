import { NextResponse } from 'next/server';
import ollama from 'ollama';
import { products } from '@/lib/products';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Prepare a concise product list for the system prompt
    const productContext = products.slice(0, 15).map(p => ({
      name: p.name,
      category: p.category,
      price: p.price,
      description: p.description
    }));

    const systemPrompt = {
      role: 'system',
      content: `You are the AI assistant for "One and Only Furniture", a premium office furniture store. 
      Your goal is to help customers find the right furniture, answer questions about products, and provide professional office design advice.
      
      Store Details:
      - We specialize in Workstations, Chairs, Meeting Tables, Soft Seating, and Storage.
      - We have completed projects for DMRC, Titan, and Usha International.
      
      Available Products (Sample):
      ${JSON.stringify(productContext)}
      
      Guidelines:
      1. Be professional, helpful, and premium in tone.
      2. If you don't know a specific detail, offer to connect them with a human sales representative.
      3. Encourage users to explore the "Projects" section to see our portfolio.
      4. Keep responses concise and formatted for a chat bubble.`
    };

    const response = await ollama.chat({
      model: 'qwen3-coder-next:cloud',
      messages: [systemPrompt, ...messages],
      stream: false, // Keeping it simple for the first version
    });

    return NextResponse.json({ message: response.message.content });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to connect to AI' }, { status: 500 });
  }
}
