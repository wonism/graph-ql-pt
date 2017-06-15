import $ from 'jquery';
import '../scss/index.scss';

$(document).ready(() => {
  $('body')
    .on('click', '#go', () => {
      $('.introduce').addClass('none');
      setTimeout(() => {
        $('.example').removeClass('none');
      }, 0);
    })
    .on('click', '#submit-1, #submit-2', (e) => {
      const target = e.target;
      const id = target.id.replace(/\D/g, '');
      const formData = new FormData();
      const query = id === '1' ? `
      {
        user(id:"1") {
          email
        }
      }` : id === '2' ? `
      {
        user(id: "1") {
          email,
          age
        }
      }` : `
      {
        user(id:"1") {
          email
        }
      }`;

      formData.append('query', query);

      fetch('/graphql', {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res.statusText);
          }
        })
        .then((res) => { console.log(res.data); })
        .catch(() => {} );
    });
});
