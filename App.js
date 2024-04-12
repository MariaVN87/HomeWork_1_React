
import './App.css';

import Message from './Components/Message.js';
import './Message.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message title="Homework 1" text="Развернуть новый проект с использованием create-react-app.
Создать компонент Message, отображающий переданный ему props текст.
Стилизовать компоненты через css (при желании можно использовать less или sass).
Дополнительное задание: Установить расширение React Devtools." />
      </header>
    </div>
  );
}

export default App;
