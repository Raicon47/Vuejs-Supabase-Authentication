// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ruwhiqctiylpmysducqs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1d2hpcWN0aXlscG15c2R1Y3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzOTk0NjEsImV4cCI6MjA2Mzk3NTQ2MX0.MdkgWRENa1XcskWcWL4E6--xxHeeiHIpFsDpk6Zj3n0'

export const supabase = createClient(supabaseUrl, supabaseKey)
