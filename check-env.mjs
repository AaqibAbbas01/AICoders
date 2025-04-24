// Script to check environment variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log('Checking Supabase environment variables:');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
// Print only first 10 characters of the keys for security
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 
  `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 10)}...` : 'undefined');
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 
  `${process.env.SUPABASE_SERVICE_ROLE_KEY.substring(0, 10)}...` : 'undefined'); 