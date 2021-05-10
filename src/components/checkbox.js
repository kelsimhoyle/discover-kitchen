import React from "react";

const Checkbox = ({ value, register }) => (
    <div className="field">
        <div className="control">
            <label className="checkbox">
                <input
                    {...register("services")}
                    type="checkbox"
                    id={value}
                    value={value}
                    name="services"

                />
                {value}
            </label>
        </div>
    </div>
);

export default Checkbox;