import java.util.Scanner;

public class EmptyDiamond
{

    public static void main(String[] ar)
    {
    	Scanner reader = new Scanner(System.in);  // Reading from System.in
		System.out.println("ENTER THE HEIGHT ");
		int ht = reader.nextInt();

        int space = ht-1;
        int midspace=-1;
        int k;

        for(int c=1;c<=Math.ceil(ht/2);)
        {
            for(int i=space;i>=1;i-=2)
            {
                int i2=i;
                while(i2!=0)
                {
                    System.out.print(" ");
                    i2--;
                }
                System.out.print("*");
                for(int j=1;j<=midspace;j++){
                    System.out.print(" ");
                }
                if(c!=1){
                    System.out.print("*");
                }
                midspace+=4;
                System.out.println();
                c++;
            }
        }

        for(int c=1;c<=Math.floor(ht/2);)
        {
            for(int i=0;i<=space;i+=2)
            {
                int i2=i;
                while(i2!=0)
                {
                    System.out.print(" ");
                    i2--;
                }
                midspace-=4;
                System.out.print("*");
                for(k=midspace+4;k>=1;k-- )
                    System.out.print(" ");
                if ((c!=(ht/2+1)))
                    System.out.print("*");

                System.out.println();

                c++;
            }
        }
    }
}