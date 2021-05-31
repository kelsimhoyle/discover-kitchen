import React from "react";

const FaqItem = ({question, answer}) => (
    <div className="box m-5">
        <div className="block">
            <p className="is-size-4 has-text-weight-medium">
                {question}
            </p>
        </div>
        <div className="block"
            dangerouslySetInnerHTML={{
                __html: answer
            }}
        />

    </div>
)

export default FaqItem;