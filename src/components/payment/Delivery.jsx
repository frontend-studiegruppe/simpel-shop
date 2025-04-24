const Delivery = () => {
    return (             <form className="grid gap-4 max-w-md">
            <div className="flex flex-col">
              <label htmlFor="name" className="  font-medium">Name</label>
              <input id="name" type="text" className="border p-2 w-full" required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="  font-medium">Address</label>
              <input id="address" type="text" className="border p-2 w-full" required />
            </div>

            <div className="flex gap-4 w-full">
              <div className="flex flex-col w-1/3">
                <label htmlFor="zipcode" className="  font-medium">Zip Code</label>
                <input id="zipcode" type="text" className="border p-2 w-full" required />
              </div>
              <div className="flex flex-col w-2/3">
                <label htmlFor="city" className="  font-medium">City</label>
                <input id="city" type="text" className="border p-2 w-full" required />
              </div>
            </div>
          </form> );
}
 
export default Delivery;