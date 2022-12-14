import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector,useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Table from 'react-bootstrap/esm/Table';
import { NavLink } from "react-router-dom";
import { Badge, Menu } from "@mui/material";
import { removeFromCart } from "../Actions/productsAction";
import { MdShoppingCart,MdClose } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Header() {
  // const cart = useSelector((state) => state.products.cart);
  // const[cartCount,setCartCount] = useState(0);
  // useEffect(() => {
  //   let count = 0;
  //   cart.forEach((item)=>{
  //     count += item.qty;
  //   });
  //   setCartCount(count);
  // }, [cart,cartCount]);

  const [totalPrice,setTotalPrice] = useState(0);
  const[cartCount,setCartCount] = useState(0);
  const cart = useSelector((state)=> state.products.cart);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const totalCount = ()=>{
      let count = 0;
      cart.forEach((item)=>{
        count += item.qty;
      });
      setCartCount(count);
  };
    // const dlt = (id)=>{
    //     dispatch(DLT(id))
    // }
    useEffect(()=>{
      totalCount();
      let price = 0;
      cart.forEach((item)=>{
        price +=item.qty * item.price;
       });
       setTotalPrice(price);
  },[totalCount,totalPrice,setTotalPrice,cart])
    const handleremoveFromCart = (id) =>{
      dispatch(removeFromCart(id));
    }


   

    
  return (
    // <Navbar bg="dark" expand="lg" variant="dark">
    //   <Container>
    //     <LinkContainer to="/">
    //       <Navbar.Brand>Digi-Shop</Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <LinkContainer to="/">
    //           <Nav.Link>Home</Nav.Link>
    //         </LinkContainer>

            // <LinkContainer to="/products">
            //   <Nav.Link>Products</Nav.Link>
            // </LinkContainer>

    //         <LinkContainer to="/cart">
    //           <Nav.Link>Cart:({cartCount})</Nav.Link>
    //         </LinkContainer>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <LinkContainer to="/">
                      <Navbar.Brand>Digi-Shop</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to="/products" style={{marginRight: '20px'}}>
                        <NavLink className="text-decoration-none text-light">Products</NavLink>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <NavLink to="/cart" className="text-decoration-none text-light">Cart</NavLink>
                    </Nav>

                    <Badge badgeContent={cartCount} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {/* <ShoppingCartIcon/> */}
                        <MdShoppingCart className="text-decoration-none text-light"/>
                        {/* <i class="fa-light fa-cart-shopping" style={{ fontSize: 25, cursor: "pointer" }}></i> */}
                    </Badge>
                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        cart.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        
                                        <th>Products Summary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.img} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.title}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qty}</p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>handleremoveFromCart(e.id)}>
                                                        <BsTrashFill/>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :₹ {totalPrice}</p>
                                </tbody>
                                <MdClose
                                  onClick={handleClose}
                                  style={{position:"absolute",top:23,right:20,fontSize:23,cursor:"pointer"}}/>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                   <MdClose
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}/>
                    <p style={{fontSize:22}}>Your cart is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu>
            </Navbar>
        </>
  );
}
