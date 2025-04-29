const Payment = () => {
  return (
    <form className="grid gap-4 max-w-md">
      <div className="flex flex-col">
        <label htmlFor="card-name" className="  font-medium">
          Name on card
        </label>
        <input
          id="card-name"
          type="text"
          className="border p-2 w-full"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="card-number" className="  font-medium">
          Card number
        </label>
        <input
          id="card-number"
          type="text"
          className="border p-2 w-full"
          required
        />
      </div>

      <div className="flex gap-4 w-full justify-between">
        <div className="flex flex-col w-2/3">
          <label htmlFor="" className="font-medium">
            Experation Date
          </label>
          <div className="flex gap-2">
            <select id="exp-month" className="border p-2">
              <option value="">MM</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select id="exp-year" className="border p-2">
              <option value="">YYYY</option>
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() + i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <label htmlFor="cvv" className="  font-medium">
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            className="border p-2 w-full h-9.5"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default Payment;
