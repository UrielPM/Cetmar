import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [ 


    ` 
    /* Large desktop :1920px. */
@media (min-width: 1920px) {   
    .slide-content h3 {padding-top: 105px;}
    .slider-area{height: 950px}
    .header-top-right::after {left: 3%;}
    .choose-area::before {right: 430px}
    .owl-carousel .owl-item .slider-img > img {width: 100%}
    .search {top: 81px}
    .header-top::before {right: 37.5%}
}

/* Laptop Device :1366px. */
@media (min-width: 1200px) and (max-width: 1500px) {
    .header-top::before {right: 38%}
    .header-top-right::after {left: -19%}


}

/* Normal desktop :992px. */
@media (min-width: 992px) and (max-width: 1200px) {
    .header-area.two .main-menu nav > ul > li > a{font-size: 14px}
    .slide-content h3 {font-size: 40px}
    .slide-content h2 {font-size: 45px; line-height: 45px}
    .event-content-right a {margin-right: 10px; padding: 8px 10px}
    .event-date h3 {padding: 11px 15px}
    .event-date {margin-right: 10px}
    .blog-bottom h2 a {font-size: 15px}
    .event-area.three .event-content h4 a {font-size: 13px}
    .main-footer .col-md-3:last-child {padding-left: 25px}
    .single-widget h3 {font-size: 18px}
    .single-widget.pr-60 {padding-right: 0}
    .single-widget p {margin-bottom: 16px}
    .header-area.two .main-menu ul li a {padding: 0 10px}
    .service-area h3 {font-size: 16px}
    .about-content h2 {margin-top: 35px}
    .notice-area.two .notice-left {padding: 26px 15px}
/*    .notice-left-wrapper .notice-left .single-notice-left:nth-child(2) {display: none}*/
    .notice-video, .notice-area.two .notice-left {height: 368px}
    .about-content h2{font-size: 25px; margin-bottom: 5px; margin-top: 10px}
    .blog-sidebar.right{margin-left: 0}
    .section-title h2 {font-size: 26px;}
    .main-menu nav > ul > li > a {line-height: 100px}
    .logo {padding: 25px 0 23px}
    .header-area.two .main-menu nav > ul > li > a {line-height: 122px}
    .search {top: 77px;}
    .single-teacher-content h2 {font-size: 18px}
    .teacher-details-content {margin-top: 0px; margin-left: 0}
    .header-top::before {right: 32.5%}
    .header-top::after {width: 30%}
    .header-top-right::after {left: -5%}
    .event-area.two .event-content h4 a {font-size: 13px}
    .event-area.two .event-content ul li {font-size: 11px; margin-right: 3px}
    .event-area.two .event-content {padding: 25px 0 28px}
    .course-content h3 {font-size: 18px}
    .course-details-right {padding: 45px 20px}
    .blog-sidebar.left {margin-right: 0px}
    .teacher-details-content h2{font-size: 25px; margin-bottom: 0}
    .teacher-details-content h5 {font-size: 18px; margin-bottom: 15px}
    .teacher-details-content h4 {font-size: 20px; margin-bottom: 12px}
    .teacher-details-content p {margin-bottom: 25px}
    .teacher-contact h4, .skill-area h4 {font-size: 16px}
    .teacher-contact p span, .teacher-contact p {font-size: 12px}
    .reply-area form input, .reply-area form textarea {margin-bottom: 13px}
    .notice-left {height: 612px;}
    .footer-area.two .main-footer .col-md-3:last-child {padding-left: 0px}
    .single-widget.instagram a{margin-right: 3px; margin-bottom: 3px}

}

 
/* Tablet desktop :768px. */
@media (min-width: 768px) and (max-width: 991px) {
    .main-menu nav > ul > li > a {font-size: 12px; line-height: 80px; padding: 0 8px}
    .logo {padding: 20px 0 15px}
    .slide-content h3 {font-size: 40px}
    .slide-content h2 {font-size: 45px; line-height: 45px}
    .notice-right {padding: 40px 40px 50px}
    .choose-content h2 {font-size: 25px}
    .course-content {padding: 22px 28px 25px}
    .single-widget.pr-60 {padding-right: 30px}
    .main-footer .col-md-3:last-child {padding-left: 0px}
    .single-widget ul li {margin-bottom: 13px}
    .header-top::before{right: 35%}
    .header-top-right::after {left: -15%}
    .single-service {padding: 20px}
    .service-area h3 {font-size: 14px; margin-bottom: 5px}
    .service-area p {font-size: 13px}
    .about-content h2 {font-size: 22px; margin-top: 0px}
    .notice-video, .notice-area.two .notice-left {height: 320px}
    .event-area.two .event-content h3 {margin-bottom: 10px}
    .event-area.two .event-content h4 {margin-bottom: 13px}
    .notice-area.three .notice-left {padding: 34px 27px}
    .about-content a {margin-top: 15px}
    .header-area.two .main-menu nav > ul > li > a {font-size: 13px; line-height: 111px}
    .blog-sidebar.right{margin-left: 0}
    .section-title h2 {font-size: 26px;}
    #blog > img {width: auto}
    .single-blog-banner a {display: inline-block}
    .notice-area, .courses-area, .event-area, .blog-area, .main-footer, .service-area, .about-area, .blog-details-area, .teacher-area, .contact-area  {padding: 80px 0}
    .main-footer, .teacher-area {padding-bottom: 50px}
    .teacher-area{padding-bottom: 80px}
    .course-details-right {padding: 45px 30px}
    .header-area.two.sticky .logo {padding: 16px 0 11px; width: 80%}
    .sticky .main-menu > nav > ul > li > a {line-height: 58px}
    .search {top: 73px}
    .single-teacher-content h2 {font-size: 18px}
    .header-top::after {width: 32%}
    .event-area.two .event-content {padding: 17px 0 18px}
    .event-area.two .event-img {margin-right: 35px}
    .service-area.two, .notice-area.two{padding-bottom: 0}
    .search-btn {margin-left: 15px}
    .notice-right-wrapper, .contact-contents {margin-right: 0px;}
    .notice-area.two .notice-left {padding: 38px 28px}
    .choose-area::before {right: 40px}
    .slider-img {display: none}
    .slide-content {padding-left: 20px}
    .courses-area{padding-bottom: 0}
    .courses-area.two, .blog-sidebar.left {padding-bottom: 80px}
    .slider-area.two .slide-content h2 {line-height: 50px}
    .footer-area.two .main-footer .col-md-3:last-child {padding-left: 0}
    .footer-bottom p {font-size: 12px; line-height: 65px}
    .blog-sidebar.right, .teacher-details-area,  .blog-sidebar.right{padding-top: 50px;}
    .event-area.three .event-content h4 a {font-size: 17px}
    .single-tag a:nth-child(3) {margin-right: 10px}
    .blog-sidebar.left{margin-right: 0; overflow: hidden}
    .teacher-contact h4, .skill-area h4, .teacher-contact p span, .teacher-contact p {font-size: 12px}
    .skill-area, .skill-bar-item {margin-left: 0px}
    .teacher-contact ul li {margin-right: 2px}
    .skill-bar-item > span {font-size: 11px}
    .progress-bar span.text-top {top: -33px; padding: 2px 8px}
    .teacher-details-content {margin-top: 0px; margin-left: 0;}
    .teacher-details-content h2{font-size: 18px; margin-bottom: 0}
    .teacher-details-content h5 {font-size: 14px; margin-bottom: 8px}
    .teacher-details-content h4 {font-size: 13px; margin-bottom: 8px}
    .teacher-details-content p {margin-bottom: 20px; font-size: 13px; line-height: 21px}
    .teacher-details-content ul li {margin-bottom: 8px; font-size: 12px}
    .teacher-details-content ul li span{font-size: 12px}
    .reply-area form input, .reply-area form textarea {margin-bottom: 13px}
    .notice-left {height: 682px}
    .logo {width: 100%}
    .main-footer .col-sm-6:first-child, .main-footer .col-sm-6:nth-child(2){margin-bottom: 30px} 
    .footer-area.two.ins > .main-footer > .container > .row > [class*="col-"]:nth-child(even) {clear: both}
    .single-widget.instagram a.gap{margin-right: 15px}
}

 
/* small mobile :320px. */
@media (max-width: 767px) {
    .one.mobile-menu a.meanmenu-reveal {margin-top: -55px}
    .mean-container a.meanmenu-reveal {margin-top: -62px}
    .search-btn {top: 38px}
    .logo {padding: 35px 0 0px}
    .slide-content h3, .choose-content h2 {font-size: 24px; line-height: 32px}
    .slide-content h3 {padding-top: 90px}
    .slide-content h2 {font-size: 24px; line-height: 30px}
    .notice-area, .courses-area, .event-area, .blog-area, .main-footer, .service-area, .about-area, .blog-details-area, .course-area, .teacher-area, .contact-area {padding: 80px 0}
    .notice-left h3 {font-size: 24px; margin-bottom: 25px}
    .single-notice-right h3, .blog-bottom h2 a {font-size: 16px}
    .choose-area::before, .header-top::before, .slider-img{display: none;}
    .choose-content {margin-left: 30px; margin-right: 30px}
    .section-title h2 {font-size: 19px}
    .event-area.three, .teacher-details-area, .blog-sidebar.right{padding-top: 80px}
    .courses-details, .event-details-area, .teacher-area, .courses-area.two {padding-bottom: 80px}
    .event-area.two .event-content {padding: 20px 0 18px}
    .notice-right-wrapper, .contact-contents {margin-right: 0px;}
    .service-area.two{padding-bottom: 0}
    .single-course, .notice-left, .single-blog, .single-widget, .single-service, .blog-details, .single-teacher, .contact-contents{margin-bottom: 30px;}
    .col-md-4:last-child .single-course, .col-md-4:last-child .single-blog, .col-md-3:last-child .single-widget, col-md-4:last-child .single-service, .col-md-3:last-child .single-teacher{margin-bottom: 0px;}
    .event-area.two .event-content h3{margin-bottom: 10px}
    .event-area.two .event-content h4 {margin-bottom: 15px}
    .event-area, .notice-area.three{padding-top: 0}
    .newsletter-form form button {position: relative; width: 100%}
    .main-footer .single-widget{padding-left: 25px}
    .main-footer .col-md-3:last-child {padding-left: 15px}
    .footer-bottom p { line-height: 20px; padding: 15px 0}
    .event-date h3 {font-size: 15px; line-height: 18px; padding: 13.5px 5px}
    .event-content-left h4 {font-size: 13px}
    .event-content {padding: 10px 0 10px}
    .event-content-left ul li {font-size: 11px}
    .course-img img, .blog-img img, #blog > img, .single-teacher-img img{width: 100%}
    .service-area h3 {font-size: 15px}
    .about-img {margin-right: 0}
    .event-area.two .event-content ul li {display: block; margin-bottom: 5px}
    .slider-area.two .slide-content h2 {line-height: 35px}
    .about-content h2 {font-size: 25px; margin-top: 0px}
    .about-img{margin-top: 50px}
    .blog-sidebar.right{margin-left: 0;}
    .content-wrapper {margin-right: 48px}
    .content-wrapper.one {margin-right: 0px}
    .sticky .mean-container a.meanmenu-reveal {margin-top: -49px; transform: all 0.6s ease 0s}
    .notice-area.two .notice-left {padding: 35px 35px 30px}
    .event-area.two .event-img {float: inherit; margin-right: 0px}
    .event-area.two .event-content {margin-left: 25px}
    .event-area.two .event-img img, .event-area.three .event-img img , .course-details-right {width: 100%}
    .sticky .content-wrapper {padding: 0; line-height: 0}
    .sticky .mean-container a.meanmenu-reveal {margin-top: -44px; transform: all 0.6s ease 0s}
    .single-widget a.gap {margin-right: 15px}
    .header-area.two .mean-container a.meanmenu-reveal {margin-top: -68px}
    .single-tag a:nth-child(3){margin-right: 10px}
    .single-tag a{margin-bottom: 10px}
    .search {top: 68px;}
    .header-top-right::after, .header-top::before {display: none;}
    .header-top::after {width: 100%}
    .header-top-left p, .header-top-right ul li a {text-align: center; line-height: 24px}
    .header-top {padding: 10px 0}
    .header-top-right.text-right{text-align: center;}
    .slide-content {padding-left: 20px}
    .courses-area.two {padding-bottom: 80px}
    .notice-left, .notice-right {padding: 45px 40px 70px}
    .single-slide {background-position: 50% center}
    .event-area.two .event-content h4 a, .event-area.three .event-content h4 a,.course-title h3, .course-content h3, .speaker-name h5 {font-size: 15px}
    .footer-area.two .main-footer .col-md-3:last-child {padding-left: 0}
    .footer-area.two .footer-bottom .copyright p, .footer-area.two .footer-bottom .footer-social  {text-align: center}
    .footer-area.two .footer-bottom .footer-social ul {padding-top: 0}
    .course-form form button {position: inherit; width: 100%}
    .course-details-left {float: inherit; padding-right: 0px; width: 100%}
    .event-area.three .event-content {padding: 23px 20px 25px}
    .blog-area.event-area.three, .event-details{padding-bottom: 30px}
    .blog-sidebar.left{margin-right: 0; margin-bottom: 50px; overflow: hidden}
    .event-details-content h2 {font-size: 18px}
    .single-speaker {padding-right: 15px}
    .teacher-details-content, .skill-area, .skill-bar-item {margin-left: 0px}
    .banner-content h2 {font-size: 25px;}
    .teacher-details-content ul li {font-size: 13px}
    .header-top-left p, .header-top-right ul li a {font-size: 12px}
    .event-area.one .single-event .event-content-right{ overflow: hidden}
    .event-area.one .single-event .event-content-right a{text-align: center; float: none; margin-top: 10px}
    .slider-area {height: 75vh}
    .sticky .logo {padding: 15px 0 6px; width: 90%}
    .header-area.two.sticky .mean-container a.meanmenu-reveal {margin-top: -41px}
    .sticky .search-btn {top: 11px}
    .header-area.two.sticky .search {top: 41px}
    .one .event-date{float: none; margin-right: 0px; display: inline-block; margin-bottom: 5px}
    .event-date h3 {padding: 15px 20px}
    .event-content-left {float: none}
    .one .event-content.text-left{text-align: center}
    .one .single-event {padding-top: 25px}
    .notice-area.three{padding-top: 0}
    .logo{ width: 100%;}
    .blog-details-content h2 {font-size: 18px}
    .header-area.two.sticky .logo {width: 90%}
    .testimonial-content {padding: 0 30px}
    .notice-video {height: 275px}
    .footer-area.three .footer-bottom.two p {padding-top: 15px; line-height: 20px}
    .footer-area.three .footer-bottom.two .footer-social ul{padding-top: 0px}
    
}
/* Large Mobile :480px. */
@media only screen and (min-width: 480px) and (max-width: 767px) {
    .slide-content h3 {font-size: 30px}
    .slide-content h2 {font-size: 35px; line-height: 35px}
    .event-content-right a{display: block}
    .service-area h3, .course-content h3 {font-size: 18px}
    .event-area.two .event-content h4 a, .event-area.three .event-content h4 a {font-size: 17px}
    .header-area.two .logo {padding: 25px 0 21px}
    .search-btn {top: 32px}
    .search {top: 64px;}
    .header-area.two .mean-container a.meanmenu-reveal {margin-top: -63px}
    .one.mobile-menu a.meanmenu-reveal {margin-top: -65px}
    .banner-content h2 {font-size: 35px;}
    .one.mobile-menu a.meanmenu-reveal {margin-top: -64px}
    .sticky .one.mobile-menu a.meanmenu-reveal {margin-top: -50px}
    .header-area.two.sticky .mean-container a.meanmenu-reveal {margin-top: -48px}
    .header-area.two.sticky .search {top: 48px}
    .one .event-date{float: left; margin-right: 20px; margin-bottom: 0}
    .event-date h3 {padding: 13.5px 5px}
    .event-content-left {float: left}
    .event-area.one .single-event .event-content-right a{ float: right; margin-top: 0px}
    .one .single-event {padding-top: 0px}
    .one .event-content.text-left{text-align: left}
    .one .event-date h3 {padding: 17px 5px}
    .event-area.two .event-content ul li {display: inline-block;}
    .sticky .search-btn {top: 18px}
    .slide-content h3 {padding-top: 40px}
    .sticky .logo{width: 80%}
    .single-widget.instagram {padding-right: 70px}
    
}


/*! #######################################################################

	MeanMenu 2.0.7
	--------

	To be used with jquery.meanmenu.js by Chris Wharton (http://www.meanthemes.com/plugins/meanmenu/)

####################################################################### */

/* hide the link until viewport size is reached */
a.meanmenu-reveal {
	display: none;
}
/* when under viewport size, .mean-container is added to body */
.mean-container .mean-bar {
	float: left;
	width: 100%;
	position: relative;
	background: #0c1923;
	padding: 4px 0;
	min-height: 42px;
	z-index: 999999;
}
.mean-container a.meanmenu-reveal {
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: Arial,Helvetica,sans-serif;
  font-weight: 700;
  height: 22px;
  line-height: 22px;
  padding: 13px 13px 11px;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
  width: 22px;
}
.mean-container a.meanmenu-reveal span {
	display: block;
	background: #fff;
	height: 3px;
	margin-top: 3px;
}
.mean-container .mean-nav {
    background: #ffffff none repeat scroll 0 0;
    float: left;
    margin-top: 44px;
    width: 100%;
}
.mean-container .mean-nav ul {
	padding: 0;
	margin: 0;
	width: 100%;
	list-style-type: none;
}
.mean-container .mean-nav ul li {
	position: relative;
	float: left;
	width: 100%;
}
.mean-container .mean-nav ul li a {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  color: #000000;
  display: block;
  float: left;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding: 1.2em 5%;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  width: 90%;
    line-height: 17px;
}
.mean-last {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.mean-container .mean-nav ul li a:hover {color: #EC1C23;}
.mean-container .mean-nav ul li li a {
	width: 80%;
	padding: 1em 10%;
	border-top: 1px solid #f1f1f1;
	border-top: 1px solid rgba(0, 0, 0, 0.5);
	opacity: 0.8;
	filter: alpha(opacity=75);
	text-shadow: none !important;
	visibility: visible;
}
.mean-container .mean-nav ul li.mean-last a {
	border-bottom: none;
	margin-bottom: 0;
}
.mean-container .mean-nav ul li li li a {
	width: 70%;
	padding: 1em 15%;
}
.mean-container .mean-nav ul li li li li a {
	width: 60%;
	padding: 1em 20%;
}
.mean-container .mean-nav ul li li li li li a {
	width: 50%;
	padding: 1em 25%;
}
.mean-container .mean-nav ul li a:hover {
	background: #252525;
	background: rgba(255,255,255,0.1);
}
.mean-container .mean-nav ul li a.mean-expand {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: rgba(255, 255, 255, 0.1) none repeat scroll 0 0;
  border-color: currentcolor currentcolor rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.7);
  border-image: none;
  border-style: none none solid solid;
  border-width: medium medium 1px 1px;
  font-weight: 700;
  height: 22px;
  line-height: 21px;
  margin-top: 1px;
  padding: 11.5px 12px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 22px;
  z-index: 2;
}
.mean-container .mean-nav ul li a.mean-expand:hover {
    background: rgba(0, 0, 0, 0.9) none repeat scroll 0 0;
    color: #ffffff;
}
.mean-container .mean-push {
	float: left;
	width: 100%;
	padding: 0;
	margin: 0;
	clear: both;
}
.mean-nav .wrapper {
	width: 100%;
	padding: 0;
	margin: 0;
}
/* Fix for box sizing on Foundation Framework etc. */
.mean-container .mean-bar, .mean-container .mean-bar * {
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box;
}
.mean-remove {
	display: none !important;
}
.mean-nav span {
  display: none;
}



  `
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



