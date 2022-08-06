/**
 * service workers
 * 在app.js中注册
 */

 self.onstatechange = ({target: { state }}) => {
  console.log('state change to:', state);
}