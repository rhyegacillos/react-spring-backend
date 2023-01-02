import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      {" "}
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is the important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut massa
        odio. Suspendisse facilisis faucibus rhoncus. Donec id vulputate est.
        Proin pellentesque, eros a cursus venenatis, metus turpis tempus ipsum,
        ut ultrices erat nibh vitae nunc. Proin id imperdiet mi. Quisque
        pellentesque metus urna, ut mollis nunc pulvinar nec. Nulla ornare risus
        consectetur, varius turpis tincidunt, vehicula urna. Praesent ac rutrum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam euismod nec metus sit amet varius. Aliquam ornare efficitur quam,
        vitae mollis neque pulvinar vitae. Ut pretium consectetur semper. Nunc
        accumsan augue vel massa malesuada, suscipit ullamcorper augue maximus.
        Morbi turpis dolor, faucibus a risus ac, semper fringilla lorem. Aenean
        at pretium ipsum.
      </p>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
