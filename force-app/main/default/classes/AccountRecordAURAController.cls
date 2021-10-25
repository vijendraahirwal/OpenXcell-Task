public class AccountRecordAURAController {
	 
    @AuraEnabled
    public static List<Account> getAccountData(){
       return [SELECT Id,Name,AccountNumber,Industry,Phone FROM Account limit 25];
    }
    
    @AuraEnabled
    public static void delAccount(Account accountRec){
        delete accountRec;
    } 
    
    @AuraEnabled
    public static Account createAccount(Account ac){
        insert ac;
        return ac;
    }
}