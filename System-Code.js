 // Accounts Creation
 // Querying account balance
 // Support money transfer
 // Support money deposite to an account
 // Support payment of bills
 // Support account closure by the client
 // Connect to mobile money system
 // Transfer money from bank to mobile money
 // Withdraw ability
 // How much withdrawn
 // Balance remaining

 //Accounts Creation by Absa bank customers
 class bankCustomer {
     constructor() {
         this.customerNames = [];
         this.customerEmails = [];
         this.customerBalance = [];
         this.customerPasswords = [];
         this.customerAccounts = [];
         this.accountNumber = 1000000
         this.telephoneNoStorage = [];
         this.mobileMoneyAccount = [];
        
     }
       // Creating a bank account by the bank customer
       creatingBankAccounts = function(name, email, password, teleNo) {
        this.accountNumber++
        this.customerNames.push(name);
        this.customerAccounts.push(this.accountNumber);
        this.customerPasswords.push(password);
        this.customerEmails.push(email);
        this.customerBalance.push(0);
        this.mobileMoneyAccount.push(0);
        this.telephoneNoStorage.push(teleNo);
        return (name + '\n' + 'Account No :' + this.accountNumber + '\n'+ ' Your account has been created successfully')
    }
    depositeMoneyToAccount(accountNumber, amountToDeposite){
        for(let i = 0; i < this.customerAccounts.length; i++) {
            if(this.customerAccounts[i] === accountNumber){
                this.customerBalance[i] += amountToDeposite
                return ('Your have deposited UgShs :' + amountToDeposite + '\n' + 'On ' + accountNumber)
            }
        }
    }
    withdrawMoneyFromAccount(accountNumber, amountToWithdraw) {
            for(let i = 0; i < this.customerAccounts.length; i++) {
                if(this.customerAccounts[i] === accountNumber) {
                    if(this.customerBalance[i] < amountToWithdraw) {
                        return 'You have insufficient credit on your account !'
                    }
                    else {
                        this.customerBalance[i] -= amountToWithdraw
                        return ( 'Your new account balance is UgShs :' + this.customerBalance[i])
                    };
                };
            };
    };
    checkingBalance(accountNumber, password) {
        for(let i = 0; i < this.customerAccounts.length; i++) {
            if(this.customerAccounts[i] === accountNumber && this.customerPasswords[i] === password) {
                return ('The current credit on your account is UgShs :' + this.customerBalance[i])
            };
        };
    };
    //Deleting accounts by the bank customer
    accountDeletion(accountNumber, accountPassword) {
        for(var i = 0; i < this.customerAccounts.length; i++) {
            if(this.customerAccounts[i] === accountNumber && this.customerPasswords[i] === accountPassword) {
                var deleted = 'Acc No : ' + accountNumber + ' is deleted successfully'
                delete this.customerAccounts[i];
                delete this.customerPasswords[i];
                delete this.customerNames[i];
                delete this.customerEmails[i];
                delete this.customerBalance[i]
                return deleted;

            };
        };
    };
     //Transfering money from from one bank account to another bank account held by bank customers
     MoneyTransferFromAccounts(accountSending, accountPassword, accountReceiving, amountToSend){
         var account = this.customerAccounts;
         var balance = this.customerBalance;
         for(var i = 0; i < this.customerAccounts.length; i++) {
             if(this.customerAccounts[i] === accountSending && this.customerPasswords[i] === accountPassword) {
                 if(this.customerBalance[i] < amountToSend) {
                     return ('You have insufficient credit on your account, please recharge and try again later')
                 }
                 else {
                     return onRecieving();
                 }
                 function onRecieving() {
                    for(var j = 0; j < account.length; j++) {
                        if(account[j] === accountReceiving) {
                            balance[i] -= amountToSend;
                            balance[j] += amountToSend;
                            return ('You have sent' + ' UgShs : ' + amountToSend + '\n' + 'To : ' + accountReceiving)
                        };
                    };
                };
           };
        };
    };
    //Payment of bills by the bank customers for the different services they are offered
    paymentOfBills = function(service,personalAccNo, personalAccPassword, insituitionAccNo, billAmount) {
        for(var i = 0; i < this.customerAccounts.length; i++) {
            let account = this.customerAccounts;
            let balance = this.customerBalance;
            if(this.customerAccounts[i] === personalAccNo && this.customerPasswords[i] === personalAccPassword) {
                    if (service === "water" || service === "electricity" || service === "school fees" || service === "health") {
                        if(this.customerBalance[i] < billAmount) {
                            return ('You have insufficient credit to make this transaction')
                        }
                        else {
                            return reciever();
                        }
                        function reciever() {
                            for(var j = 0; j < account.length; j++) {
                                if(account[j] === insituitionAccNo) {
                                    balance[i] -= billAmount;
                                    balance[j] += billAmount;
                                    return ('Transaction  is made of UgShs :' + billAmount + '\n' + 'From ' + personalAccNo + ' To ' + insituitionAccNo)
                                };
                            };
                        };
                    };
            };
       };
    };
    //Connecting bank account to personal mobile money to enable transfer of money from bank to mobile money account
    mobileMoney(teleNo, accountNo, amount) {
        for(var i = 0; i < this.customerAccounts.length; i++) {
            if(this.customerAccounts[i] === accountNo && this.telephoneNoStorage[i] === teleNo) {
                if(this.customerBalance[i] < amount) {
                    return ('Your account has insufficient credit \n You can not make this transaction')
                }
                else {
                    this.mobileMoneyAccount[i] += amount;
                    this.customerBalance[i] -= amount;
                    return ('Your have deposited UgShs : ' + amount + ' to your mobile money account \n Your new account balance is Shs : ' + this.customerBalance[i])
                };
            };
        };
    };
    // Checking credit on mobile money account
    checkingMobileMoneyBalance(teleNo) {
        for(var i = 0; i < this.telephoneNoStorage.length; i++) {
            if(this.telephoneNoStorage[i] === teleNo) {
                return ('The current credit on your mobile money account is UgShs :' + this.mobileMoneyAccount[i])
            };
        };
    };
    // Transfering money from mobile money account to bank account
    moneyTransferFromMobileMoneyToBankAcct(teleNo, accountNo, amountToTranfer) {
        for(var i = 0; i < this.telephoneNoStorage.length; i++) {
            if(this.telephoneNoStorage[i] === teleNo && this.customerAccounts[i] === accountNo) {
                if(this.mobileMoneyAccount[i] < amountToTranfer) {
                    return 'Your account has insufficient credit \n You can not complete this tranaction'
                }
                else {
                    this.mobileMoneyAccount[i] -= amountToTranfer;
                    this.customerBalance [i] += amountToTranfer;
                    return ('Your have deposited UgShs : ' + amountToTranfer + ' to your mobile money account \n Your new account balance is Shs : ' + this.customerBalance[i])
                };
            };
        };
    };
};
 var user = new bankCustomer();




