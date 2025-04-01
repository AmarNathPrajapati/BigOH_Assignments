import { useState } from "react";

function TwoWayBinding() {
    const [text, setText] = useState("");

    return (
        <div className="p-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="p-2 border rounded"
                placeholder="Type something..."
            />
            <p className="mt-2">You typed: {text}</p>
        </div>
    );
}

export default TwoWayBinding;