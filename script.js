 function i() {
        document.getElementById('m').style.display = "none";
    }
    function valid(a) {
        document.getElementById('t').value = 0;
        if(a == 0) {
            if(document.getElementById('floatingInput').value == "") {
                document.getElementById('floatingInput').value = "Player 1";
            } 
            if(document.getElementById('floatingPassword').value == "") {
                document.getElementById('floatingPassword').value = "Player 2";
            }
            document.getElementById('Game-btn').style.display = "none";
            document.getElementById('about-btn').style.display = "none";
            document.getElementById('head').style.display = "none";
            document.getElementById('detail').value = document.getElementById('floatingInput').value + "'s Turn - X";
            document.getElementById('detail').style.display = "block";
            document.getElementById('playArea').style.display = "block";

            document.getElementById('inp').value++;
        } else {
            if(document.getElementById('floatingInput1').value == "") {
                document.getElementById('floatingInput1').value = "Player 1 - X";
            } 
            if(document.getElementById('floatingPassword1').value == "") {
                document.getElementById('floatingPassword1').value = "Player 2 - O";
            }
            document.getElementById('Game-btn').style.display = "none";
            document.getElementById('about-btn').style.display = "none";
            document.getElementById('head').style.display = "none";
            document.getElementById('detail').value = document.getElementById('floatingInput1').value + "'s Turn - X";
            document.getElementById('detail').style.display = "block";
            document.getElementById('playArea').style.display = "block";
            
            document.getElementById("f1").value = "";
            document.getElementById("f2").value = "";
            document.getElementById("f3").value = "";

            document.getElementById("s1").value = "";
            document.getElementById("s2").value = "";
            document.getElementById("s3").value = "";

            document.getElementById("t1").value = "";
            document.getElementById("t2").value = "";
            document.getElementById("t3").value = "";

            document.getElementById('inp').value++;

            document.getElementById('a').value = 0;
        }
        //console.log(document.getElementsByClassName('odd').style.display);
    }
    function clic(id){
        document.getElementById('t').value++;
        if(document.getElementById('inp').value <= "0") { 
            if(document.getElementById('a').value == 0) {
                document.getElementById('detail').value = document.getElementById('floatingPassword').value + "'s Turn - O";
                document.getElementById(id).value = 'X';
                document.getElementById('a').value = 1;
            } else {
                document.getElementById('detail').value = document.getElementById('floatingInput').value + "'s Turn - X";
                document.getElementById(id).value = 'O';
                document.getElementById('a').value = 0;
            }
        } else {
            if(document.getElementById('a').value == 0) {
                document.getElementById('detail').value = document.getElementById('floatingPassword1').value + "'s Turn - O";
                document.getElementById(id).value = 'X';
                document.getElementById('a').value = 1;
            } else {
                document.getElementById('detail').value = document.getElementById('floatingInput1').value + "'s Turn - X";
                document.getElementById(id).value = 'O';
                document.getElementById('a').value = 0;
            }
        }
        setTimeout(()=>{
            if((document.getElementById('f1').value == 'X' && document.getElementById('f2').value == 'X' && document.getElementById('f3').value == 'X')) {
                console.log("dddd");
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if ((document.getElementById('f1').value == 'O' && document.getElementById('f2').value == 'O' && document.getElementById('f3').value == 'O')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if((document.getElementById('s1').value == 'X' && document.getElementById('s2').value == 'X' && document.getElementById('s3').value == 'X')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(((document.getElementById('s1').value == 'O' && document.getElementById('s2').value == 'O' && document.getElementById('s3').value == 'O'))) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if((document.getElementById('t1').value == 'X' && document.getElementById('t2').value == 'X' && document.getElementById('t3').value == 'X')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(((document.getElementById('t1').value == 'O' && document.getElementById('t2').value == 'O' && document.getElementById('t3').value == 'O'))) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if((document.getElementById('f1').value == 'X' && document.getElementById('s1').value == 'X' && document.getElementById('t1').value == 'X')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(((document.getElementById('f1').value == 'O' && document.getElementById('s1').value == 'O' && document.getElementById('t1').value == 'O'))) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if((document.getElementById('f2').value == 'X' && document.getElementById('s2').value == 'X' && document.getElementById('t2').value == 'X')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(((document.getElementById('f2').value == 'O' && document.getElementById('s2').value == 'O' && document.getElementById('t2').value == 'O'))) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if((document.getElementById('f3').value == 'X' && document.getElementById('s3').value == 'X' && document.getElementById('t3').value == 'X')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(((document.getElementById('f3').value == 'O' && document.getElementById('s3').value == 'O' && document.getElementById('t3').value == 'O'))) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if((document.getElementById('f1').value == 'X' && document.getElementById('s2').value == 'X' && document.getElementById('t3').value == 'X')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(((document.getElementById('f1').value == 'O' && document.getElementById('s2').value == 'O' && document.getElementById('t3').value == 'O'))) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if((document.getElementById('f3').value == 'X' && document.getElementById('s2').value == 'X' && document.getElementById('t1').value == 'X')) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingInput1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(((document.getElementById('f3').value == 'O' && document.getElementById('s2').value == 'O' && document.getElementById('t1').value == 'O'))) {
                if(document.getElementById('inp').value <= 0) {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                } else {
                    swal({
                        title: "Congratulations",
                        text: document.getElementById('floatingPassword1').value + " won the match",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "New Game",
                                value: "catch",
                            },
                            defeat: false,
                            },
                        
                    })
                    
                    .then((value) => {
                        switch (value) {
                        case "catch":
                        document.getElementById('m').style.display = "block";
                        document.getElementById('floatingInput1').value = "";
                        document.getElementById('floatingPassword1').value = "";
                            break;
                    
                        default:
                            swal("Got away safely!");
                        }
                    });
                }
            } else if(document.getElementById('t').value == 9) {
                swal("Draw!","Its a draw","error");
            }
            quit();
        },500);
    }