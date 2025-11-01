import { Ollama } from 'ollama'
import Dockerode from 'dockerode'

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })
const response = await ollama.list()
const actions = await ollama.ps()


console.log(response);
console.log(actions);

async function main() {
    const imagePath = '/home/sarverott/Downloads/48e862a0b2f1fac3db0987353fa7b282-1759999548.jpg'
    const rrr = await ollama.generate({
      model: 'llava',
      prompt: 'describe this image:',
      images: [imagePath],
      stream: true,
    })
    for await (const part of rrr) {
      process.stdout.write(part.response)
    }
  }
  
  main().catch(console.error)