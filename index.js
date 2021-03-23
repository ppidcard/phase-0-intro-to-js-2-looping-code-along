// Code your solutions in this file


  function writeCards (names, message_type) {
    let message_=[];
    for (let i = 0; i < names.length; i++) {
        message_.push(`Thank you, ${names[i]}, for the wonderful ${message_type} gift!`);
    }

       return message_;
    }

    function countDown (number_) {
        for (let i=number_; i >=0; i--) {
          console.log (i);
        }
      }