// Find the nth prime

public class PrimeNumbers {

    public static void main (String[] args) {

        printNPrimeNumbers(10);
        System.out.println(&quot;================&quot;);
        findNthPrime(10);

    }

    public static boolean isPrime(int number) {
        if (number &lt; 2) {
            return false;
        }
        if (number == 2) {
            return true;
        } else if (number % 2 == 0) {
            return false;
        }
        for (int i=3; i*i&lt;=number; i=i+2) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void printNPrimeNumbers(int n) {
        int count = 0;
        int i = 0;
        while (count &lt; n) {
            if (isPrime(i)) {
                System.out.println(i + &quot; is Prime&quot;);
                count++;
            }
            i++;
        }
    }

    public static int findNthPrime(int n) {
        int nthPrime = 0;
        int count = 0;
        int i = 0;
        while (count &lt; n) {
            if (isPrime(i)) {
                count++;
                if (count == n) {
                    System.out.println(i + &quot; is &quot; + n + &quot;th Prime&quot;);
                    nthPrime = i;
                    break;
                }
            }
            i++;
        }
        return nthPrime;
    }
}
