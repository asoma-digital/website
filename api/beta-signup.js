import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, affiliation, interest } = formData;

    // Basic validation
    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check for duplicate email
    const { data: existing, error: checkError } = await supabase
      .from('beta-testers')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing email:', checkError);
      return new Response(JSON.stringify({ error: 'Check error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (existing) {
      return new Response(JSON.stringify({ message: 'You’ve already signed up!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert into Supabase
    const { error: insertError } = await supabase.from('beta-testers').insert([
      { name, email, affiliation, interest }
    ]);

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return new Response(JSON.stringify({ error: 'Database insert error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Handler error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}