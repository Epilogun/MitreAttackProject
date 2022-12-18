var tableArr = [];
var userIdArr = ["admin"];
var userPassArr = ["1234"];
var current_user = "";

function Header() {
    return (
        <header>
            <img src="./img/mitre_attack_logo.png" width="500px" id="logo"/>
            <button type="button" className="btn btn-dark btn-rounded" id="home" onClick={Home}><i className="fa fa-home" aria-hidden="true"></i></button>
        </header>
    )
}

function SideNav() {
    var userID = document.getElementById("loginName").value;
    var userPass = document.getElementById("loginPassword").value;
    var userIndex = userIdArr.indexOf(userID);
    var passIndex = userPassArr.indexOf(userPass);
    if(userIdArr.includes(userID) && userPassArr.includes(userPass) && userIndex == passIndex)
    {
        event.preventDefault();
        current_user = userID       
        document.getElementById("myForm").style.display = "none";
        ReactDOM.render(
        <div id="sideNav">
            <img src="./img/background.jpg" width="2560px" id="hack"/>
            <p className="p">Mitre Attack Tests</p>
            <p className="p2">Merhaba <span id="current_user"></span></p>
            <nav className="nav">
                <ul className="nav-items">
                    <li id="liOne" onClick={TestOne}><a>Test 1</a></li>
                    <li id="liTwo" onClick={TestTwo}><a>Test 2</a></li>
                    <li><a>Test 3</a></li>
                    <li><a>Test 4</a></li>
                    <li id="liFive" onClick={Rehber}><a>Rehber</a></li>
                </ul>
            </nav>
        </div>, document.getElementById('middle'));
        document.getElementById("current_user").innerHTML = current_user;
        document.getElementById("sideNav").style.display = "block";
        document.getElementById("hack").style.display = "block";
    }
    else {
        event.preventDefault();
        alert("Kullanıcı adı veya şifre doğru değil.");
    }
}

function Register() {
    event.preventDefault();
    var registerName = document.getElementById("registerName").value;
    var registerNick = document.getElementById("registerUsername").value;
    var registerMail = document.getElementById("registerEmail").value;
    var registerPass = document.getElementById("registerPassword").value;
    var registerPassVerify = document.getElementById("registerRepeatPassword").value;
    if(registerName == "" || registerMail == "" || registerNick == "" || registerPass == "" || registerPassVerify == "") {
        alert("Boş alanları doldurunuz.");
    }
    else if(registerPass != registerPassVerify) {
        alert("Şifreler aynı değil.");
    }
    else if(registerPass.length <= 3) {
        alert("Şifre çok kısa.");
    }
    else if(registerNick.length <= 3) {
        alert("Kullanıcı adı çok kısa.");
    }
    else {
        userIdArr.push(registerNick);
        userPassArr.push(registerPass);
        alert("Kayıt başarılı. Giriş yapabilirsiniz.")
    }

}

function TestOne() {
    event.preventDefault();
    ReactDOM.render(
        <div id="testOne">
            <h1 id="headline">Test 1 - Panodan Yararlanma</h1>
            <p id="infoOne">Zararlı komutları yürütmek veya verileri yönlendirmek için herhangi bir PowerShell komutunun sonucunu panoya aktarma ve toplama (T1115 - Clipboard Data).</p>
            <p id="t1command">PowerShell Command: "echo Get-Process | clip Get-Clipboard | iex"</p>
            <button type="button" className="btn btn-outline-warning btn-rounded" id="testOneButton" onClick={TestOneStart} data-mdb-ripple-color="dark">Testi Başlat</button>
            <input type="file" id="fileID" accept=".myproject" onClick={FileSelect}/>
        </div>, document.getElementById('infoDiv'));
    dataTable();
    var testOneButton = document.getElementById("liOne");
    var testTwoButton = document.getElementById("liTwo");
    var rehber = document.getElementById("liFive");
    testOneButton.style.backgroundColor = "yellow";
    testOneButton.disabled = "true"
    testTwoButton.style.backgroundColor = "#F9F6EE";
    testTwoButton.disabled = "false";
    rehber.style.backgroundColor = "#F9F6EE";
    rehber.disabled = "false";
    var testOneBut = document.getElementById("testOneButton");
    if(typeof(testOneBut) != "undefined" && testOneBut != null) {
        testOneBut.style.display = "block";
    }  
    var testTwoBut = document.getElementById("testTwoButton");
    if(typeof(testTwoBut) != "undefined" && testTwoBut != null) {
        testTwoBut.style.display = "none";
    } 
    var t1command = document.getElementById("t1command");
    if(typeof(t1command) != "undefined" && t1command != null) {
        t1command.style.display = "block";
    } 
    var t2command = document.getElementById("t2command");
    if(typeof(t2command) != "undefined" && t2command != null) {
        t2command.style.display = "none";
    }
    var infoOne = document.getElementById("infoOne");
    if(typeof(infoOne) != "undefined" && infoOne != null) {
        infoOne.style.display = "block";
    }
    var infoTwo = document.getElementById("infoTwo");
    if(typeof(infoTwo) != "undefined" && infoTwo != null) {
        infoTwo.style.display = "none";
    }
    var infoThree = document.getElementById("infoThree");
    if(typeof(infoThree) != "undefined" && infoThree != null) {
        infoThree.style.display = "none";
    }
    var headline = document.getElementById("headline");
    if(typeof(headline) != "undefined" && headline != null) {
        headline.style.display = "block";
    }
    var headlineTwo = document.getElementById("headlineTwo");
    if(typeof(headlineTwo) != "undefined" && headlineTwo != null) {
        headlineTwo.style.display = "none";
    }
    var headlineThree = document.getElementById("headlineThree");
    if(typeof(headlineThree) != "undefined" && headlineThree != null) {
        headlineThree.style.display = "none";
    }
    var fileID = document.getElementById("fileID");
    if(typeof(fileID) != "undefined" && fileID != null) {
        fileID.style.display = "block";
    }
    var dataDiv = document.getElementById("dataDiv")
    if(typeof(dataDiv) != "undefined" && dataDiv != null) {
        dataDiv.style.display = "block";
    }
    var TestImage = document.getElementById("TestImage")
    if(typeof(TestImage) != "undefined" && TestImage != null) {
        TestImage.style.display = "none";
    }
    var backgroundHack = document.getElementById("hack")
    if(typeof(backgroundHack) != "undefined" && backgroundHack != null) {
        backgroundHack.style.display = "none";
    }
}

function TestTwo() {
    event.preventDefault();
    ReactDOM.render(
        <div id="testTwo">
            <h1 id="headlineTwo">Test 2 - Ekran Yakalama</h1>
            <p id="infoTwo">Hasımlar, hayati bilgilerinizi çalmak için bilgisayarınızın ekran görüntüleri alabilirler (T1113 - Screen Capture).</p>
            <p id="t2command">PowerShell Command: "nircmd.exe cmdwait 2000 savescreenshot "./screenshot.png"    -Wait 2 seconds, and then save the current screen to ss.png"</p>
            <button type="button" className="btn btn-outline-warning btn-rounded" id="testTwoButton" onClick={TestTwoStart} data-mdb-ripple-color="dark">Testi Başlat</button>
        </div>, document.getElementById('infoTwoDiv'));
    var testOneButton = document.getElementById("liOne");
    var testTwoButton = document.getElementById("liTwo");
    var rehber = document.getElementById("liFive");
    testTwoButton.style.backgroundColor = "yellow";
    testTwoButton.disabled = "true";
    testOneButton.style.backgroundColor = "#F9F6EE";
    testOneButton.disabled = "false";
    rehber.style.backgroundColor = "#F9F6EE";
    rehber.disabled = "false";
    var testTwoBut = document.getElementById("testTwoButton");
    testTwoBut.style.backgroundColor = "#F9F6EE";
    testTwoBut.disabled = false;
    var testOneBut = document.getElementById("testOneButton");
    if(typeof(testOneBut) != "undefined" && testOneBut != null) {
        testOneBut.style.display = "none";
    }  
    var testTwoBut = document.getElementById("testTwoButton");
    if(typeof(testTwoBut) != "undefined" && testTwoBut != null) {
        testTwoBut.style.display = "block";
    } 
    var t1command = document.getElementById("t1command");
    if(typeof(t1command) != "undefined" && t1command != null) {
        t1command.style.display = "none";
    } 
    var t2command = document.getElementById("t2command");
    if(typeof(t2command) != "undefined" && t2command != null) {
        t2command.style.display = "block";
    }
    var infoOne = document.getElementById("infoOne");
    if(typeof(infoOne) != "undefined" && infoOne != null) {
        infoOne.style.display = "none";
    } 
    var infoTwo = document.getElementById("infoTwo");
    if(typeof(infoTwo) != "undefined" && infoTwo != null) {
        infoTwo.style.display = "block";
    }
    var infoThree = document.getElementById("infoThree");
    if(typeof(infoThree) != "undefined" && infoThree != null) {
        infoThree.style.display = "none";
    }
    var headline = document.getElementById("headline");
    if(typeof(headline) != "undefined" && headline != null) {
        headline.style.display = "none";
    } 
    var headlineTwo = document.getElementById("headlineTwo");
    if(typeof(headlineTwo) != "undefined" && headlineTwo != null) {
        headlineTwo.style.display = "block";
    }
    var headlineThree = document.getElementById("headlineThree");
    if(typeof(headlineThree) != "undefined" && headlineThree != null) {
        headlineThree.style.display = "none";
    }
    var fileID = document.getElementById("fileID");
    if(typeof(fileID) != "undefined" && fileID != null) {
        fileID.style.display = "none";
    }
    var dataDiv = document.getElementById("dataDiv")
    if(typeof(dataDiv) != "undefined" && dataDiv != null) {
        dataDiv.style.display = "none";
    }
    var TestImage = document.getElementById("TestImage")
    if(typeof(TestImage) != "undefined" && TestImage != null) {
        TestImage.style.display = "none";
    }
    var backgroundHack = document.getElementById("hack")
    if(typeof(backgroundHack) != "undefined" && backgroundHack != null) {
        backgroundHack.style.display = "none";
    }
}

function Rehber() {
    event.preventDefault();
    ReactDOM.render(
        <div id="rehber">
            <h1 id="headlineThree">Rehber</h1>
            <p id="infoThree">Herhangi bir testi başlatmadan önce proje dizininde ilgili testin batch dosyasını başlatmalısınız. Batch, aynı dizinde bir çıktı dosyası oluşturacak ve dosya seçiminde bu çıktı kullanılacak. Web siteleri üzerinden yerel dosyalar çağrılmadığı için bu işlemi manuel yapmak zorundayız. 
            Test 2 için bulunan default görsel dizinden silinmeli ve "testTwo.bat" çalıştırılıp yeni çıktı alınmalıdır. Test 3 ve Test 4 henüz hazır değil.</p>
        </div>, document.getElementById('rehber'));
    var testOneButton = document.getElementById("liOne");
    var testTwoButton = document.getElementById("liTwo");
    var rehber = document.getElementById("liFive");
    testOneButton.style.backgroundColor = "#F9F6EE";
    testOneButton.disabled = "false"
    testTwoButton.style.backgroundColor = "#F9F6EE";
    testTwoButton.disabled = "false";
    rehber.style.backgroundColor = "yellow";
    rehber.disabled = "true";
    var testOneBut = document.getElementById("testOneButton");
    if(typeof(testOneBut) != "undefined" && testOneBut != null) {
        testOneBut.style.display = "none";
    }  
    var testTwoBut = document.getElementById("testTwoButton");
    if(typeof(testTwoBut) != "undefined" && testTwoBut != null) {
        testTwoBut.style.display = "none";
    } 
    var t1command = document.getElementById("t1command");
    if(typeof(t1command) != "undefined" && t1command != null) {
        t1command.style.display = "none";
    } 
    var t2command = document.getElementById("t2command");
    if(typeof(t2command) != "undefined" && t2command != null) {
        t2command.style.display = "none";
    }
    var infoOne = document.getElementById("infoOne");
    if(typeof(infoOne) != "undefined" && infoOne != null) {
        infoOne.style.display = "none";
    }
    var infoTwo = document.getElementById("infoTwo");
    if(typeof(infoTwo) != "undefined" && infoTwo != null) {
        infoTwo.style.display = "none";
    }
    var infoThree = document.getElementById("infoThree");
    if(typeof(infoThree) != "undefined" && infoThree != null) {
        infoThree.style.display = "block";
    }
    var headline = document.getElementById("headline");
    if(typeof(headline) != "undefined" && headline != null) {
        headline.style.display = "none";
    }
    var headlineTwo = document.getElementById("headlineTwo");
    if(typeof(headlineTwo) != "undefined" && headlineTwo != null) {
        headlineTwo.style.display = "none";
    }
    var headlineThree = document.getElementById("headlineThree");
    if(typeof(headlineThree) != "undefined" && headlineThree != null) {
        headlineThree.style.display = "block";
    }
    var fileID = document.getElementById("fileID");
    if(typeof(fileID) != "undefined" && fileID != null) {
        fileID.style.display = "none";
    }
    var dataDiv = document.getElementById("dataDiv")
    if(typeof(dataDiv) != "undefined" && dataDiv != null) {
        dataDiv.style.display = "none";
    }
    var TestImage = document.getElementById("TestImage")
    if(typeof(TestImage) != "undefined" && TestImage != null) {
        TestImage.style.display = "none";
    }
    var backgroundHack = document.getElementById("hack")
    if(typeof(backgroundHack) != "undefined" && backgroundHack != null) {
        backgroundHack.style.display = "none";
    }
}

async function TestOneStart() {
    var homeButton = document.getElementById("home");
    var table = document.getElementById("datas");
    var testOneBut = document.getElementById("testOneButton");
    var cell = [];
    var row = [];
    var z = 0;
    if(document.getElementById("fileID").value != "") {
        homeButton.disabled = true;
        testOneBut.disabled = true;
        navigator.clipboard
        .readText()
        for(let i = 0; i < 250; i++) {
            row[i] = table.insertRow(i+1)
            for(let x = 0; x < 5; x++) {
                cell[x] = row[i].insertCell(x);
                cell[x].innerHTML = tableArr[z];
                z++;
                await delay(1);
            }
        }
        alert("Test 1 tamamlandı.")
        testOneBut.disabled = true;
        homeButton.disabled = false;
    }
    else {
        alert("Öncelikle testin '.myproject' uzantılı batch sonuç dosyasını seçmelisiniz.");
    }
}

function TestTwoStart() {
    event.preventDefault();
    var testOneBut = document.getElementById("testOneButton");
    if(typeof(testOneBut) != "undefined" && testOneBut != null) {
        testOneBut.disabled = false;
    } 
    document.getElementById("testTwoButton").disabled = true;
    ReactDOM.render(
        <div id="imgDisplay">
            <img id="TestImage" src="./tests/screencapture.myproject"/>
        </div>, document.getElementById('imageDiv'));
    document.getElementById("TestImage").style.display ="block";
}

function FileSelect() {
    var contents = "";
    let file = document.getElementById("fileID");
    file.addEventListener("change", function () {
        var reader = new FileReader();
        reader.onload = function (progressEvent) {
        contents = this.result;
        tableArr = contents.split(/\s+/);
        document.getElementById("testOneButton").style.backgroundColor = "#F9F6EE"
        play();
        };
            reader.readAsText(this.files[0]);
        });
}

function Home() {
    event.preventDefault();
    var testOneButton = document.getElementById("liOne");
    var testTwoButton = document.getElementById("liTwo");
    var rehber = document.getElementById("liFive");
    testTwoButton.style.backgroundColor = "#F9F6EE";
    testOneButton.style.backgroundColor = "#F9F6EE";
    rehber.style.backgroundColor = "#F9F6EE";
    var testOneBut = document.getElementById("testOneButton");
    var testTwoBut = document.getElementById("testTwoButton");
    if(typeof(testOneBut) != "undefined" && testOneBut != null) {
        testOneBut.disabled = false;
    } 
    if(typeof(testTwoBut) != "undefined" && testTwoBut != null) {
        testTwoBut.disabled = false;
    } 
    var myForm = document.getElementById("myForm");
    if(typeof(myForm) != "undefined" && myForm != null) {
        myForm.style.display = "block";
    } 
    var SideNav = document.getElementById("sideNav");
    if(typeof(SideNav) != "undefined" && SideNav != null) {
        SideNav.style.display = "none";
    } 
    var testOneBut = document.getElementById("testOneButton");
    if(typeof(testOneBut) != "undefined" && testOneBut != null) {
        testOneBut.style.display = "none";
    }  
    var testTwoBut = document.getElementById("testTwoButton");
    if(typeof(testTwoBut) != "undefined" && testTwoBut != null) {
        testTwoBut.style.display = "none";
    } 
    var t1command = document.getElementById("t1command");
    if(typeof(t1command) != "undefined" && t1command != null) {
        t1command.style.display = "none";
    } 
    var t2command = document.getElementById("t2command");
    if(typeof(t2command) != "undefined" && t2command != null) {
        t2command.style.display = "none";
    }
    var infoOne = document.getElementById("infoOne");
    if(typeof(infoOne) != "undefined" && infoOne != null) {
        infoOne.style.display = "none";
    } 
    var infoTwo = document.getElementById("infoTwo");
    if(typeof(infoTwo) != "undefined" && infoTwo != null) {
        infoTwo.style.display = "none";
    }
    var infoThree = document.getElementById("infoThree");
    if(typeof(infoThree) != "undefined" && infoThree != null) {
        infoThree.style.display = "none";
    }
    var headline = document.getElementById("headline");
    if(typeof(headline) != "undefined" && headline != null) {
        headline.style.display = "none";
    } 
    var headlineTwo = document.getElementById("headlineTwo");
    if(typeof(headlineTwo) != "undefined" && headlineTwo != null) {
        headlineTwo.style.display = "none";
    }
    var headlineThree = document.getElementById("headlineThree");
    if(typeof(headlineThree) != "undefined" && headlineThree != null) {
        headlineThree.style.display = "none";
    }
    var fileID = document.getElementById("fileID");
    if(typeof(fileID) != "undefined" && fileID != null) {
        fileID.style.display = "none";
    }
    var dataDiv = document.getElementById("dataDiv")
    if(typeof(dataDiv) != "undefined" && dataDiv != null) {
        dataDiv.style.display = "none";
    }
    var TestImage = document.getElementById("TestImage")
    if(typeof(TestImage) != "undefined" && TestImage != null) {
        TestImage.style.display = "none";
    }
    if(tableArr.length > 5) {
        for(let b = 250; b > 0; b--) {
            document.getElementById("datas").deleteRow(b);
        }
    }
}

function Login() {
        ReactDOM.render(<SideNav />, document.getElementById('middle'));
}

function Form() {
    return (
        <div className="col-md-3" id="myForm">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
                <a
                className="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
                >Giriş</a
                >
            </li>
            <li className="nav-item" role="presentation">
                <a
                className="nav-link"
                id="tab-register"
                data-mdb-toggle="pill"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
                >Kayıt Ol</a
                >
            </li>
            </ul>
            <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form>
                <div className="text-center mb-3">
                    <p id="textOne">Bunları kullanarak giriş yapabilirsin:</p>
                    <a className="btn btn-secondary btn-floating mx-1" href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a className="btn btn-secondary btn-floating mx-1" href="https://github.com/login">
                        <i className="fab fa-github"></i>
                    </a>

                    <a className="btn btn-secondary btn-floating mx-1" href="https://accounts.google.com/">
                        <i className="fab fa-google"></i>
                    </a>

                    <a className="btn btn-secondary btn-floating mx-1" href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="loginName" className="form-control" />
                    <label className="form-label" htmlFor="loginName" id="labelOne">Kullanıcı Adı</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="loginPassword" className="form-control" />
                    <label className="form-label" htmlFor="loginPassword" id="labelTwo">Şifre</label>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                    <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                        <label className="form-check-label" htmlFor="loginCheck" id="textOne"> Beni hatırla </label>
                    </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                    <a href="#!" id="textTwo">Şifreni mi unuttun?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4" id="button" onClick={SideNav}>Giriş</button>
                <div className="text-center">
                    <p id="textOne">Üye değil misin? <a href="#pills-register" id="textTwo">Kayıt Ol</a></p>
                </div>
                </form>
            </div>
            <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <form>
                <div className="text-center mb-3">
                    <a className="btn btn-secondary btn-floating mx-1" href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a className="btn btn-secondary btn-floating mx-1" href="https://github.com/login">
                        <i className="fab fa-github"></i>
                    </a>

                    <a className="btn btn-secondary btn-floating mx-1" href="https://accounts.google.com/">
                        <i className="fab fa-google"></i>
                    </a>

                    <a className="btn btn-secondary btn-floating mx-1" href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="registerName" className="form-control" />
                    <label className="form-label" htmlFor="registerName" id="labelThree">İsim</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="registerUsername" className="form-control" />
                    <label className="form-label" htmlFor="registerUsername" id="labelFour">Kullanıcı Adı</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="registerEmail" className="form-control" />
                    <label className="form-label" htmlFor="registerEmail" id="labelFive">E-mail</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="registerPassword" className="form-control" />
                    <label className="form-label" htmlFor="registerPassword" id="labelSix">Şifre</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="registerRepeatPassword" className="form-control" />
                    <label className="form-label" htmlFor="registerRepeatPassword" id="labelSeven">Şifreyi tekrarla</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-3" id="buttonTwo" onClick={Register}>Kayıt</button>
                </form>
            </div>
            </div>
        </div>
    )
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function dataTable() {
    return (
        ReactDOM.render(
            <div className="scrollit" id="table-wrapper">
                <div id="dataTable">
                <table className="table" id="datas">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Image Name</th>
                        <th scope="col">PID</th>
                        <th scope="col">Session Name</th>
                        <th scope="col">Session#</th>
                        <th scope="col">Mem Usage#</th>
                    </tr>
                </thead>
            <tbody>
    
            </tbody>
            </table>
                </div>
            </div>, document.getElementById('dataDiv')
        )
    )
}

function Footer() {
    return (
        <footer>
            <small>Web Application Developmnet Project 2022</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Form />
            <Footer />
        </div>
    )
}

function play() {
    var audio = new Audio("/sound/beep.mp3");
    audio.play();
}

ReactDOM.render(<Page />, document.getElementById('main'));