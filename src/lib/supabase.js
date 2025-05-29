// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = '<your project url>'
const supabaseKey = '<your supabase API key>'

export const supabase = createClient(supabaseUrl, supabaseKey)
