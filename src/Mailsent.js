import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './mailsent.css'
function mailsent() {


  return (
  <>
  <section class="mail-seccess section">
	<div class="container">
		<div class="row ">
			<div class="col-lg-6 offset-lg-3 col-12 d-flex justify-content-center align-item-center text-center">
			
				<div class="text-center success-inner">
					<h2><i class="fa fa-envelope text-center"></i><span>Your Mail Sent Successfully!</span></h2>
					<p>A Mass Email Service helps you reach a large Audience and Nurture them one email at a time. In Addition to getting direct access to your Customer Base, you can also track how your emails perform and test various methods to Increase Clicks and Conversions.</p>
				<Link to="/">	<button  class="btn-primary btn-lg">Go Home</button></Link>
				</div>			
			</div>
		</div>
	</div>
</section>
  
  </>
  )
}

export default mailsent