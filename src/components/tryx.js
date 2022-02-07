import React from "react";

const tryx = () => {
  return (
    <div>
      {/* <!-- Large modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        Large modal
      </button>

      <div
        className="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">...</div>
        </div>
      </div>

      {/* <!-- Small modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-sm"
      >
        Small modal
      </button>

      <div
        className="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">...</div>
        </div>
      </div>
    </div>
  );
};

export default tryx;
