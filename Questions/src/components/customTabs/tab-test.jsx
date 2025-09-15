import Tabs from "./tabs";

const TabsTest = () => {
    const onChange = (currentTabIndex) => {
        console.log(currentTabIndex) ; 
    }
    const tabs = [
        {
            label: "Tab 1",
            content: "Content for Tab 1",
        },
        {
            label: "Tab 2",
            content: "Content for Tab 2",
        },
        {
            label: "Tab 3",
            content: "Content for Tab 3",
        }
    ]
    return (
    <div>
      <Tabs tabsContent={tabs} onChange={onChange}/>
    </div>
  );
};

export default TabsTest;
