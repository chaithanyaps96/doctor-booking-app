import './faq.css';

const Faq = () => {
  return (
    <div>
      <h1>Answers to some of the common questions you wanted to ask us.</h1>

      <div className="faq">
        <div className="row1">
          <p>Is the data secure? What are the steps taken on data security.</p>
        </div>
        <div className="row2">
          <p>
            Data is secured both in transit and at rest. We follow HIPAA
            guidelines to ensure security of PII data. Application is hosted in
            a HIPAA compliant infrastructure. We also ensure that your data is
            protected from unauthorized access using the latest security
            protocols. Finally, we do not generate any revenue by providing any
            direct services to your patients, hence we do not need to access
            your data for any other purposes other than to provide you technical
            support when requested.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="row1">
          <p>I find the price to be high while comparing with another vendor</p>
        </div>
        <div className="row2">
          <p>
            This is a cloud based application and the pricing includes software
            license, cost of hosting, backups and support. Also, many other
            vendors have other business models that consider monetizing of
            patient data by providing a consumer service. This enables them to
            subsidize the cost of the software itself. We request you to read
            their terms and conditions carefully and check if they have any
            consumer facing services. If that is the case, it is likely your
            data may be used to generate revenue for the company at your cost.
            Our pricing considers all costs of running a secure software
            application giving you complete ownership of data. Our customers
            have benefitted immensely from the automation and consider this as
            an investment that results in significant cost savings and much
            better patient experience and hence higher patient retention.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="row1">
          <p>
            What should we do if we lose internet connection, can we update data
            offline? (Without Internet)
          </p>
        </div>
        <div className="row2">
          <p>
            DocPulse is a cloud-based solution. So internet connectivity is a
            must. Nowadays, internet services are available everywhere at a very
            reasonable cost. Since you are relying on DocPulse for your
            operations, we suggest that you have a backup internet service (from
            another service provider).
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="row1">
          <p>
            Will we be able to use the software as our staff are not well versed
            with computers?
          </p>
        </div>
        <div className="row2">
          <p>
            Yes, it is fairly simple to use, and anyone with basic working
            knowledge of computers should be able to use DocPulse.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Faq;
