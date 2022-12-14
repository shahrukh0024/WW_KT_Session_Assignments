import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function DropdownList({
  sortby,
  AtoZ,
  ZtoA,
  PriceHigh,
  PriceLow,
  handleSelect,
}) {
  const btnStyle = {
    borderRadius:'0%',
    color:'white',

}
  return (
    <Dropdown onSelect={handleSelect}
    
    >
      <Dropdown.Toggle 
      variant="outline" 
      id="dropdown-basic"
      style={{btnStyle}}
      >
        {sortby}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="a-z">
          Sort By
          <AiOutlineArrowUp /> {AtoZ}
        </Dropdown.Item>
        <Dropdown.Item eventKey="z-a">
          Sort By
          <AiOutlineArrowDown /> {ZtoA}
        </Dropdown.Item>
        <Dropdown.Item eventKey="low to high">
          Sort By
          <AiOutlineArrowUp /> {PriceLow}
        </Dropdown.Item>
        <Dropdown.Item eventKey="high to low">
          Sort By
          <AiOutlineArrowDown /> {PriceHigh}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;
