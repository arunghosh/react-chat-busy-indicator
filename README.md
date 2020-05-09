# React Busy Indicator for Chatbots

[Click here for live demo](https://codesandbox.io/s/react-chatbot-busy-indicator-hy1fh?file=/src/BusyIndicator.js)

During my work on [chatbot application](https://theparadox.life/posts/rule-based-chatbot-from-scratch-using-reactjs-and-nodejs-p1) there was a need for a busy indicator, when the user is waiting for the server response. 

The busy indicator I had in mind looked like where the blue dot will keep moving.

![Screenshot](https://raw.githubusercontent.com/arunghosh/react-chat-busy-indicator/master/docs/react-chat-busy-indicator.png)

We can make this component without accepting much props. But I wanted to component to be more generic having the following props

|Prop|Purpose|
|-|-|
|`active`|if `true` the indicator will be active| 
|`length`|number of dots|
|`delay`|delay(ms) in the propagation of the active dot in the busy indicator|   

Initially I thought it to be a complicated one, but ended up having a few lines of code without much complication.

```javascript
function BusyIndicator({ busy, length, delay }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => setPosition(pos => (pos + 1) % length);
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

The `BusyItem` is a `styled-component`
```javascript
const BusyItem = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: ${props => (props.current ? "#2980b9" : "#bdc3c7")};
  margin: 0px 0.3rem 0px 0;
  display: inline-block;
  line-height: 0.6rem;
`;
```
