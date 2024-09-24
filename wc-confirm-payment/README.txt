=== WooCommerce Confirm Payment ===
Contributors: surakrai
Donate link: https://www.surakrai.com/
Tags: Confirm payment, LINE Notify, ปลั๊กอินแจ้งชำระเงิน, แจ้งโอนเงิน, แจ้งชำระเงิน
Requires at least: 4.0.1
Tested up to: 5.5.1
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

WooCommerce confirm payment ปลั๊กอินแจ้งชำระเงิน

== Description ==

ปลั๊กอิน WooCommerce Confirm Payment ปลั๊กอินแจ้งชำระเงิน สำหรับวิธีชำระค่าบริการโดยโอนเงินผ่านธนาคาร

Demo : [https://demo.surakrai.com/wcp/confirm-payment/](https://demo.surakrai.com/wcp/confirm-payment/)

= Features =

- เพิ่มบัญชีธนาคารและอัพโหลดโลโก้ได้ไม่จำกัด
- ป้องกันการแจ้งเงินปลอม เลือกที่จะยอมรับหรือปฏิเสธการแจ้งชำระเงินของลูกค้าได้
- ลูกค้ามารถดูสถานะการแจ้งชำระเงินและประวัติย้อนหลังได้
- Override เทมเพลตอีเมลได้
- รองรับการแจ้งเตือน line notify
- บันทึกการแจ้งชำระเงินทุกขั้นตอนไว้ในโน้ตของ woocommerce
- ฟอร์มแจ้งชำระเงินใช้ html5 สะดวกสำหรับการใช้งานในมือถือ

== Installation ==

1. Upload `woocommerce-confirm-payment.php` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Screenshots ==

1. หน้าตั้งค่า
2. เลือกโลโก้ธนาคาร
3. ตั้งค่าอีเมล์
4. หน้าแจ้งชำระเงิน 
5. แสดงโลโก้หน้าเช็คเอาท์
6. แสดงข้อมูลธนาคาร หน้าของคุณ
7. หน้าฟอร์มแจ้งชำระเงิน
8. หน้าประวัติการชำระเงินของลูกค้า
9. รายการสั่งซื้อที่แจ้งชำระเงินแล้ว
10. รายการแจ้งชำระเงินทั้งหมด
11. บันทึกการแจ้งชำระเงิน
12. อีเมลแจ้งเตือนการแจ้งชำระเงิน
13. อีเมลแจ้งเตือนลูกค้า เมือแจ้งชำระเงินไม่สำเร็จ
14. แจ้งเตือนการชำระเงินใน LINE Notify
15. เลือกวันที่การโอนเงิน

== Changelog ==

= 1.0 =
* Add hook wcp_allowed_payment_method

= 0.9.9 =
* Add hook line notify message

= 0.9.8 =
* Fixed bug on submit form
* Update version jquery form

= 0.9.7 =
* Add option disable transfer date
* Remove modernizr and cleave.js

= 0.9.6 =
* Set default transfer date.

= 0.9.5 =
* Fix display issue in email template

= 0.9.4 =
* First release