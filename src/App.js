import { useState } from "react";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-0nmrFWw6wSm6xIJXSbx4FpTw',
  apiKey: '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'
})

const openai = new OpenAIApi(configuration);

function App() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();
  
    setIsTyping(true);
  
    let msgs = chats;
    msgs.push({ role: 'user', content: message })
    setChats(msgs);
    setMessage('');

    await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are EbereGPT. You help with Email writing.',
        },
        ...chats,
      ],
    }).then((result) => {
      msgs.push(result.data.choices[0].message);
      setChats(msgs)
    })
    .catch((error) => console.log(error));
  }

  return (
    <main>
      <h1>My Companion</h1>

      <section>
        {
          chats && chats.length ? (
            chats.map((chat, index) => (
              <p key={index}>
                <span>{chat.role}</span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          ) : ''
        }
      </section>

      <form onSubmit={(e) => chat(e, message)}>
        <input 
          type="text"
          name="message"
          value={message}
          placeholder="Type a message"
          onChange={e => setMessage(e.target.value)}  
        />
      </form>

      {
        isTyping ? (
          <p>
            <i>Typing...</i>
          </p>
        ) : (
          ''
          )}
    </main>
  )
}

export default App;