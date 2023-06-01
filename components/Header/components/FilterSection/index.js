import Search from "@/components/Search";
import SearchIcon from "@/ui/SearchIcon";
import Topics from "../Topics";

const FilterSection = props => {
  const onSearchInputHandler = e => {
    const { value } = e.target;
    props.getBlogBySearch(value);
  };
  return (
    <div className="!my-16 rounded-2xl border-2 border-black-100">
      {/* grid-template-columns: minmax(0,400px) minmax(0,820px) 1fr; */}
      <div className="mx-auto my-16 flex grid-cols-[minmax(0,_400px)_minmax(0,_820px)] flex-col  px-5  md:grid md:max-w-[1220px] xl:px-0">
        <div className=" flex items-center  rounded-full border-2 border-transparent bg-black-100 pl-5 text-white-100 transition-colors hover:border-primary">
          <SearchIcon />
          <Search onChange={onSearchInputHandler} />
        </div>
        <Topics tags={props.tags} className="mt-16 md:mt-0" />
      </div>
    </div>
  );
};

export default FilterSection;
