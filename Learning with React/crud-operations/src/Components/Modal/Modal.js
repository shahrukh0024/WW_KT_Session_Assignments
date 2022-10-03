function Modal({ msg, del, name}) {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
        onClick={() => del(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3 stlye={{ color: "#111", fontSize: "16px" }}>{msg}</h3>
          <h1 style={{ color: "blue", fontSize: "24px" }}>{name}</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
          <div className='button'>
            <button className='dlt-button' onClick={() => del(true)}> Yes </button>
            <button className='edit-button' onClick={() => del(false)}> No </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Modal;
  