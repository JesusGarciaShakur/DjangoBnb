import Conversation from "../components/inbox/Conversation";
import { getUserId } from "../lib/actions"
import apiService from "../services/apiService";

export type UserType = {
    id: string
    name: string
    avatar_url: string
}

export type ConversationType = {
    id: string
    users: UserType[]
}

const InboxPage = async () => {
    const userId = await getUserId();

    if (!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>Necesitas estar autenticado pa</p>
            </main>
        )
    }

    const convsersations = await apiService.get('/api/chat/')
    console.log('conver',convsersations);

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="mt-6 mb-2 text-2xl">Inbox</h1>
            {convsersations.map((conversation: ConversationType) => {
                return (
                    <Conversation
                        userId={userId}
                        key={conversation.id}
                        conversation={conversation}
                    />
                )
            })}

        </main>
    );
}
export default InboxPage;