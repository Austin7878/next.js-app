import Counter from "@/components/counter";
import ContactForm from "@/components/formHanding";
import UserList from "@/components/useEffect";

export default function Home() {
  return (
    <div>
      {/* <Counter /> */}
      <UserList />
      <ContactForm />
    </div>
  );
}