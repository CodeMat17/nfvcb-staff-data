import StaffDataList from "@/components/StaffDataList";
import { list } from "@/list";

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen max-w-3xl mx-auto '>
      <h1 className='text-center text-3xl md:text-4xl'>DataDeck</h1>
      <div className='my-8'>
        {/* <pre>{ JSON.stringify(list, null, 2)}</pre> */}
        <StaffDataList staffList={list} />
      </div>
    </div>
  );
};

export default Dashboard;
