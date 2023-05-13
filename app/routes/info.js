import Route from '@ember/routing/route';
import ENV from 'loyalty-stamp-card/config/environment';


export default class IndexRoute extends Route {

    async model() {
        const url = 'https://connect.squareupsandbox.com/v2/customers/search';
    
        const headers = new Headers();
        headers.append('Square-Version', '2023-04-19');
        headers.append('Authorization', `Bearer EAAAEKZKA8S9jbVECgybi5H_MH-iicS2nfNLi-Dvhcljrs0rNDHwbf2kIkM7cFtp`);
        headers.append('Content-Type', 'application/json');
    
        const body = JSON.stringify({
          query: {
            filter: {
              phone_number: {
                exact: '+14255551111',
              },
            },
          },
        });
    
        const options = {
          method: 'POST',
          headers,
          body,
        };
    
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          return data;
        } catch (error) {
          // Handle any errors
        }
      }

    // get token() {
    //     return encodeURIComponent(ENV.SANDBOX_ACCESS_TOKEN);
    // }
}