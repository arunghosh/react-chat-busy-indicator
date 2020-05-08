# React Busy Indicator for Chatbots

During my work on [chatbot application](https://theparadox.life/posts/rule-based-chatbot-from-scratch-using-reactjs-and-nodejs-p1) there was a need for a busy indicator, when the user is waiting for the server response. 

The busy indicator I had in mind looked like

![Screenshot](https://raw.githubusercontent.com/arunghosh/react-chat-busy-indicator/master/docs/react-chat-busy-indicator.png)

I wanted to component to be generic having the following props

|prop|purpose|
|-|-|
|`active`|if true the indicator will be active| 
|`length`|number of dots|
|`delay`|delay(ms) in the propagation of the active dot in the busy indicator|   

Initially I thought it to be a complicated one, but got completed in a few lines of code.
```javascript
function BusyIndicator({ busy, length, delay }) {
  const [position, setPosition] = useState(0);
  const updatePosition = () => setPosition(pos => (pos + 1) % length);

  useEffect(() => {
    if (!busy || !delay) return;
    const timerId = setInterval(updatePosition, delay);
    return () => clearInterval(timerId);
  }, [delay, busy, length]);

  return (
    <div>
      {Array.from({ length }, (_, index) => (
        <BusyItem key={index} current={position === index}>
          &nbsp;
        </BusyItem>
      ))}
    </div>
  );
}
```

