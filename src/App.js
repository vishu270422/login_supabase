import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa,} from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'
import { supabase } from './components/supabase'



const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
  />
)
export default App;
