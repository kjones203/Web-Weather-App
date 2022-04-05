

    axios.get('input.valarm.net/services/v1/postYoctoApiAlert/.svc')
      .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
      })
      .catch(error => {
        console.log(error);
      });