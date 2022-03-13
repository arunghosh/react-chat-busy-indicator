# React Busy Indicator for Chatbots

[Click here for live demo](https://codesandbox.io/s/react-chatbot-busy-indicator-hy1fh?file=/src/BusyIndicator.js)

![Screenshot](https://raw.githubusercontent.com/arunghosh/react-chat-busy-indicator/master/docs/react-chat-busy-indicator.png)

|Prop|Purpose|
|-|-|
|`active`|if `true` the indicator will be active| 
|`length`|number of dots|
|`delay`|delay(ms) in the propagation of the active dot in the busy indicator|   

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
