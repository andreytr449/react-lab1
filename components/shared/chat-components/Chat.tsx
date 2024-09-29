import ChatLeftSide from "@/components/shared/chat-components/ChatLeftSide";
import ChatRightSide from "@/components/shared/chat-components/ChatRightSide";

export default function Chat() {
    return (
        <div className="flex h-screen bg-black">
            <ChatLeftSide />
            <ChatRightSide />
        </div>

    )
}