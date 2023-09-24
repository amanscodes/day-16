
var count = 10;

function countdown() {
  setTimeout(function() {
    document.getElementById("timer").innerText=count;
    count--;

    if (count >= 1) {
      setTimeout(function() {
        document.getElementById("timer").innerText=count;
        count--;

        if (count >= 1) {
          setTimeout(function() {
            document.getElementById("timer").innerText=count;
            count--;

            if (count >= 1) {
              setTimeout(function() {
                document.getElementById("timer").innerText=count;
                count--;

                if (count >= 1) {
                  setTimeout(function() {
                    document.getElementById("timer").innerText=count;
                    count--;

                    if (count >= 1) {
                      setTimeout(function() {
                        document.getElementById("timer").innerText=count;
                        count--;

                        if (count >= 1) {
                          setTimeout(function() {
                            document.getElementById("timer").innerText=count;
                            count--;
                            if (count >= 1) {
                                setTimeout(function() {
                                  document.getElementById("timer").innerText=count;
                                  count--;
                                  if (count >= 1) {
                                    setTimeout(function() {
                                      document.getElementById("timer").innerText=count;
                                      count--;
                                      if (count >= 1) {
                                        setTimeout(function() {
                                          document.getElementById("timer").innerText=count;
                                          count--;
                                          if (count < 1) {
                                            setTimeout(function() {
                                              document.getElementById("timer").innerText="Happy Independence Day";
                                            
                                            }, 1000);
                                          }
                                        }, 1000);
                                      }
                                    }, 1000);
                                  }
                                }, 1000);
                              }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

countdown();






