import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
    return (
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                        type="text"
                        placeholder="Type Your Full Name"
                        id="full_name"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="WhatsApp">WhatsApp Number</label>
                    <input
                        type="tel"
                        placeholder="+62xxxx"
                        id="WhatsApp"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Shipping Address</label>
                    <textarea
                        placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
                        id="address"
                        rows={7}
                    />
                </div>
            </div>
        </CardWithHeader>
    );
};

export default OrderInformation;