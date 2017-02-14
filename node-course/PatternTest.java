import java.io.PrintWriter;
import java.util.Scanner;

public class PatternTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//			*
//		*   	*
//	*				*
//		*		*
//			*
	 Scanner sc = new Scanner(System.in);
	 int length = sc.nextInt();
		int mid = (length/2)+1;
		
		int[] lcheck = {1,mid};
		int[] rcheck = {1,mid};

		/*int[] lcheck = {3,2,1,2,3};
		int[] rcheck = {3,4,5,4,3};
*/	for(int i=1;i<length+1;i++)
	{
	
		System.out.println("");
		for (int j = 1; j < length+1; j++) {
				
			if(i==lcheck[0]&&j==lcheck[1])
			{
				System.out.print("*");
			}else if(i==rcheck[0]&&j==rcheck[1])
			{
				System.out.print("*");
			}
			else
			{
				System.out.print(" ");
			}
			if(j==length&&i<mid)
			{
				lcheck[0]+=1;
				lcheck[1]-=1;
				rcheck[0]+=1;
				rcheck[1]+=1;
				
			}else if(j==length&&i>=mid)
			{
					lcheck[0]+=1;
					lcheck[1]+=1;
					rcheck[0]+=1;
					rcheck[1]-=1;
					//System.out.println("i value: "+i+"  left[0]: "+lcheck[0]+"  left[1]: "+lcheck[1]+"  rght[0]: "+rcheck[0]+"  rght:[1]: "+rcheck[1]);
			}
					
				
				
		}
	}
	
		
	
	}

}
