function Message(props) {
    return (
        <div className="message">
            <span>Заголовок:{props.title}</span>
            <span>Статья:{props.text}</span>
        </div>
    );
}

export default Message;