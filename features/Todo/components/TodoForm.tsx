import Button from "@/components/Button";

const TodoForm: React.FC = () => {
    return (
        <div className="TodoForm-container">
            <h4>What Should I do today?</h4>
            {/* input 공통 컴포넌트로 빼기 */}
            <input type="text" placeholder="Enter your work to do."></input>
            <Button/>
        </div>
    );
}

export default TodoForm;