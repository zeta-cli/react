import React from 'react';
import { Login } from '../../zeta-auth';

/**
 * Login Page
 *
 * @returns {object} Login Page react component
 */
export default function LoginPage() {
  return (
    <div>
      <div className="row pt-md-4 pb-4">
        <div className="col-md-5 separator-left text-center order-md-2 login">
          <div className="pl-md-5 pt-5 pb-5">

            <Login />

          </div>
        </div>
        {/* Info */}
        <div className="col-md-7 pr-md-5 pt-5 pb-5">
          <h3>
            Wellcome to
            <span className="font-weight-bold">XXX</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit tellus et aliquet, tempor tristique donec
            malesuada vestibulum
            mattis pharetra commodo lacinia vel lobortis, facilisi augue rutrum ut phasellus taciti feugiat sapien
            parturient.
            Mauris cras tincidunt nibh fermentum venenatis vulputate eleifend mi eget magna, potenti mus molestie
            tristique commodo
            ultricies inceptos dapibus conubia, metus at porta fames sociosqu nec sed nascetur ut. Integer tempor
            interdum proin
            etiam orci et libero volutpat imperdiet commodo enim, per duis fames scelerisque sem phasellus ut
            habitant
            nec non
            praesent netus, vestibulum convallis neque himenaeos sodales a fusce ac vitae taciti.
          </p>
        </div>
      </div>

    </div>
  );
}
