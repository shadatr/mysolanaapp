use anchor_lang::prelude::*;

declare_id!("8DTyKbde7rt4pmTNn2dvMNyr48vissLNiTr8WLHFQFAx");

#[program]
pub mod mysolanaapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
